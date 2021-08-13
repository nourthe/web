const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// production
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const enBlogFolder = './content/en/blog/';
const esBlogFolder = './content/es/blog/';
const enPortfolioFolder = './content/en/portfolio/';
const esPortfolioFolder = './content/es/portfolio/';
const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');

const htmlPages = [
  {
    menu: 'Home',
    template: './src/index.twig',
  },
  {
    menu: 'About',
    filename: 'about/index.html',
    template: './src/about.twig',
    chunks: ['main'],
  },
  {
    menu: 'Blog',
    filename: 'blog/index.html',
    template: './src/blog/index.twig',
    chunks: ['main'],
  },
  {
    menu: 'Portfolio',
    filename: 'portfolio/index.html',
    template: './src/portfolio/index.twig',
    chunks: ['main'],
  },
  {
    filename: '404.html',
    template: './src/404.twig',
    chunks: ['main'],
  },
];

const commonParameters = {
  links: {
    github: 'https://github.com/nourthe',
    linkedin: 'https://linkedin.com/in/nourthe',
    twitter: 'https://twitter.com/ngourthe',
  },
};

const getBlogEntries = () => {
  const blogEntries = [];
  fs.readdirSync(esBlogFolder).forEach((year) => {
    const yearFolderFull = path.join(esBlogFolder, year);
    if (fs.statSync(yearFolderFull).isDirectory()) {
      fs.readdirSync(yearFolderFull).forEach((file) => {
        const fileFullPath = path.join(yearFolderFull, file);
        const data = fs.readFileSync(fileFullPath, 'utf-8');
        const content = fm(data); // Front-matter extract.
        const ext = path.extname(file);
        const filename = path.join('blog', year, path.basename(file, ext));
        if (ext === '.md') {
          content.body = marked(content.body); // Markdown proccess.
        } else {
          console.error('nourthe web: formato desconocido: ', ext);
        }
        blogEntries.push({
          filename,
          year,
          path: fileFullPath,
          permalink: filename,
          title: content.attributes.title,
          ...content,
        });
      });
    }
  });
  return blogEntries;
};

const getPortfolioEntries = () => {
  const portfolioEntries = [];
  fs.readdirSync(esPortfolioFolder).forEach((year) => {
    const yearFolderFull = path.join(esPortfolioFolder, year);
    if (fs.statSync(yearFolderFull).isDirectory()) {
      fs.readdirSync(yearFolderFull).forEach((file) => {
        const fileFullPath = path.join(yearFolderFull, file);
        const data = fs.readFileSync(fileFullPath, 'utf-8');
        const content = fm(data); // Front-matter extract.
        const ext = path.extname(file);
        const filename = path.join('portfolio', year, path.basename(file, ext));
        if (ext === '.md') {
          content.body = marked(content.body); // Markdown proccess.
        } else {
          console.error('nourthe web: formato desconocido: ', ext);
        }
        portfolioEntries.push({
          filename,
          year,
          path: fileFullPath,
          permalink: filename,
          project: content.attributes.project,
          link: content.attributes.link,
          ...content,
        });
      });
    }
  });
  return portfolioEntries;
};

function standarizedPage(originalPage) {
  const page = originalPage;
  if (page.filename === undefined) page.filename = 'index.html';
  if (page.slug === undefined) page.slug = page.filename;
  if (page.chunks === undefined) page.chunks = 'all';
  if (page.filename === 'index.html') page.path = '/';
  if (page.menu === undefined) page.menu = '';
  else { page.path = `/${page.filename.replace('index.html', '')}`; }
  return page;
}

const getHtmlPluginPages = () => {
  const htmlPluginPages = [];
  const blogEntries = getBlogEntries();
  const portfolioEntries = getPortfolioEntries();
  const blogChunks = ['main'];
  const portfolioChunks = ['main'];
  const htmlStandPages = [];
  const stringsPath = path.join(__dirname, './content/es/strings.json');
  const strings = JSON.parse(fs.readFileSync(stringsPath));
  htmlPages.forEach((noStPage) => {
    htmlStandPages.push(standarizedPage(noStPage));
  });
  htmlPages.forEach((item) => {
    const page = standarizedPage(item);
    htmlPluginPages.push(
      new HtmlWebpackPlugin({
        filename: page.filename,
        template: page.template,
        defer: page.chunks,
        templateParameters: {
          ...commonParameters,
          pages: htmlStandPages,
          blogEntries,
          portfolioEntries,
          date: {
            year: 2021,
          },
        },
        strings,
      }),
    );
  });
  blogEntries.forEach((entry) => {
    htmlPluginPages.push(
      new HtmlWebpackPlugin({
        filename: path.join(entry.filename, 'index.html'),
        template: './src/blog/entry.twig',
        defer: blogChunks,
        templateParameters: {
          ...entry,
          ...commonParameters,
          pages: htmlStandPages,
          blogEntries,
          date: {
            year: 2021,
          },
        },
        strings,
      }),
    );
  });
  portfolioEntries.forEach((entry) => {
    htmlPluginPages.push(
      new HtmlWebpackPlugin({
        filename: path.join(entry.filename, 'index.html'),
        template: './src/portfolio/entry.twig',
        defer: portfolioChunks,
        templateParameters: {
          ...entry,
          ...commonParameters,
          pages: htmlStandPages,
          portfolioEntries,
          date: {
            year: 2021,
          },
        },
        strings,
      }),
    );
  });
  return htmlPluginPages;
};

module.exports = {
  entry: {
    main: './src/js/app',
    vendor: './src/js/vendor',
  },
  output: {
    filename: path.join('assets', 'js', '[name].bundle.js'),
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9090,
    historyApiFallback: {
      index: '404.html',
      rewrites: [
        { from: /./, to: '/404.html' },
      ],
    },
  },

  plugins: [
    ...getHtmlPluginPages(),
    new PreloadWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join('assets', 'css', 'bundle.css'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: 'twig-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|ttf|otf|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },

};
