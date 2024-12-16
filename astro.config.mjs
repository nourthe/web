import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nourthe.github.io/web/',
  base: '/web/',
  output: 'static',
  integrations: [tailwind()],
});
