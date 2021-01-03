const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// production
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPages = [
  {
    menu: 'home',
    template: './src/index.twig',
  },
  {
    menu: 'about',
    filename: 'about/index.html',
    template: './src/about.twig',
    chunks: ['main'],
  },
  {
    filename: '404.html',
    template: './src/404.twig',
    chunks: ['main'],
  },
];

function standarizedPage(originalPage) {
  const page = originalPage;
  if (page.filename === undefined) page.filename = 'index.html';
  if (page.chunks === undefined) page.chunks = 'all';
  if (page.filename === 'index.html') page.path = '/';
  if (page.menu === undefined) page.menu = '';
  else { page.path = `/${page.filename.replace('index.html', '')}`; }
  return page;
}

const templateLoader = {
  test: /\.twig$/,
  use: [
    'raw-loader',
    {
      loader: 'twig-html-loader',
      options: {
        data: () => {
          const htmlStandPages = [];
          htmlPages.forEach((item) => {
            htmlStandPages.push(standarizedPage(item));
          });
          return {
            pages: htmlStandPages,
          };
        },
      },
    },
  ],
};

const getHtmlPluginPages = () => {
  const htmlPluginPages = [];
  htmlPages.forEach((item) => {
    const page = standarizedPage(item);
    htmlPluginPages.push(
      new HtmlWebpackPlugin({
        filename: page.filename,
        template: page.template,
        chunks: page.chunks,
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: {
      index: '404.html',
      rewrites: [
        { from: /./, to: '/404.html' },
      ],
    },
  },

  plugins: [
    ...getHtmlPluginPages(),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      templateLoader,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
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
      // {
      //   test: /\.scss/,
      //   use: '',
      // },
    ],
  },

};
