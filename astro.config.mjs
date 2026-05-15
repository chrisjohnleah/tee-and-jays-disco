// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import critters from 'astro-critters';
import compress from '@playform/compress';

const priorityFor = (url) => {
	const path = new URL(url).pathname;
	if (path === '/') return 1.0;
	if (path === '/services/' || path === '/areas/') return 0.9;
	if (path.startsWith('/services/') || path.startsWith('/areas/')) return 0.8;
	if (['/contact/', '/about/', '/reviews/', '/faq/', '/gallery/'].includes(path)) return 0.7;
	if (['/privacy/', '/terms/', '/sitemap/'].includes(path)) return 0.3;
	return 0.5;
};

const changefreqFor = (url) => {
	const path = new URL(url).pathname;
	if (path === '/') return 'weekly';
	if (path.startsWith('/services/') || path.startsWith('/areas/')) return 'monthly';
	if (['/privacy/', '/terms/'].includes(path)) return 'yearly';
	return 'monthly';
};

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://teeandjaysdisco.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        item.priority = priorityFor(item.url);
        item.changefreq = changefreqFor(item.url);
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),

    // Inline above-the-fold CSS and lazy-load the rest.
    // Has to run before compress so its output gets minified.
    critters(),

    // Minify HTML / CSS / JS in the final build.
    // Images + SVG already optimised, skip those passes.
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
});
