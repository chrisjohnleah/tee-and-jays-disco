// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import critters from 'astro-critters';
import compress from '@playform/compress';


const serviceHubs = [
	'wedding-djs',
	'birthday-party-djs',
	'anniversary-djs',
	'corporate-djs',
	'school-disco-djs',
	'pub-club-djs',
	'community-djs',
];

const priorityFor = (url) => {
	const path = new URL(url).pathname;
	if (path === '/') return 1.0;
	if (path === '/services/' || path === '/areas/' || serviceHubs.some((h) => path === `/${h}/`)) return 0.9;
	if (path.startsWith('/services/') || path.startsWith('/areas/') || serviceHubs.some((h) => path.startsWith(`/${h}/`))) return 0.85;
	if (path.startsWith('/personas/') || path.startsWith('/best/')) return 0.75;
	if (['/contact/', '/about/', '/reviews/', '/faq/', '/gallery/'].includes(path)) return 0.7;
	if (['/privacy/', '/terms/', '/sitemap/'].includes(path)) return 0.3;
	return 0.5;
};

const changefreqFor = (url) => {
	const path = new URL(url).pathname;
	if (path === '/') return 'weekly';
	if (path.startsWith('/services/') || path.startsWith('/areas/') || serviceHubs.some((h) => path.startsWith(`/${h}/`))) return 'monthly';
	if (['/privacy/', '/terms/'].includes(path)) return 'yearly';
	return 'monthly';
};

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://teeandjaysdisco.com',

  // Astro 6 image optimization — AVIF first, then WebP, solid quality, generates responsive srcset
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 82,
        formats: ['avif', 'webp', 'jpeg'],
        // sensible widths for this DJ marketing site
        widths: [400, 600, 800, 1200, 1600],
      },
    },
    // Add remote image domains here if you ever use external CDNs
    domains: [],
    remotePatterns: [],
  },

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
