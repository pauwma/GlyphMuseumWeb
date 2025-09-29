import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pauwma.github.io',
  base: '/GlyphMuseumWeb',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});