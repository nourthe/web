import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<your-github-username>.github.io/<your-repo-name>/',
  base: '/<your-repo-name>/',
  output: 'static',
  integrations: [],
});
