# TeeJays Disco

**Professional mobile DJ services** for weddings, birthdays, anniversaries, corporate events, school discos, and pub nights across Tameside, Manchester, and the wider North West.

- **Live site**: [https://teeandjaysdisco.com](https://teeandjaysdisco.com)
- **Phone**: 07545 378105
- **Email**: bookings@teejaysdisco.co.uk

## Overview

This is a high-performance, SEO-focused marketing website for TeeJays Disco (Tony & John), two experienced mobile DJs with 35+ years each in the industry. The site features extensive programmatic SEO coverage for locations and services, strong Core Web Vitals performance, and modern Cloudflare edge deployment.

The project uses Astro 6 in SSR mode deployed on Cloudflare Workers + Assets, with aggressive image optimization, automatic critical CSS inlining, and production-grade caching/security headers.

## Tech Stack

| Area              | Technology                              |
|-------------------|-----------------------------------------|
| Framework         | [Astro 6](https://astro.build) (SSR)    |
| Hosting / Edge    | Cloudflare Workers + Assets             |
| Image Optimization| Astro `<Image>` + Sharp + Cloudflare Images binding |
| CSS Inlining      | `astro-critters`                        |
| Asset Compression | `@playform/compress`                    |
| Sitemap           | `@astrojs/sitemap` (smart priority rules) |
| Deployment        | Wrangler + custom `deploy` script       |

## Key Features

- **Programmatic SEO** — Dozens of location + service combination pages (e.g. Wedding DJs in Manchester, Birthday Party DJs in Stockport, etc.) with rich local content and structured data.
- **Modern Image Pipeline** — Uses Astro 6's `<Image>` component with AVIF-first delivery, responsive `srcset`, and `inferSize` where appropriate. Critical hero images are imported as assets for maximum optimization.
- **Performance** — Critters for above-the-fold CSS, HTML/JS/CSS minification, long-term immutable caching for hashed assets, and smart `stale-while-revalidate` for HTML.
- **Cloudflare Best Practices** — Production `_headers` and `_redirects` files with strong security headers (HSTS, CSP, Permissions-Policy, etc.) and proper caching rules.
- **Clean Architecture** — Centralized data in `src/data/`, reusable components, and a modular service/area system.

## Project Structure

```
/
├── public/                  # Static assets (copied to dist/client)
│   ├── _headers             # Cloudflare caching + security headers
│   ├── _redirects           # Trailing slashes, www handling, vanity redirects
│   └── images/              # All photography and hero images
├── src/
│   ├── assets/images/       # Optimized images imported by Astro (e.g. main hero)
│   ├── components/          # Reusable UI components (Hero, PageHero, GalleryStrip, etc.)
│   ├── data/                # Business data, services, areas, testimonials, gallery
│   ├── layouts/             # Layout.astro + SEO/meta
│   └── pages/               # All routes (heavy use of dynamic [slug] pages)
├── astro.config.mjs         # Astro + Cloudflare + image optimization config
├── wrangler.jsonc           # Local dev configuration
├── wrangler.worker.jsonc    # Production Worker + Assets configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 22.12
- pnpm or npm

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (with Cloudflare bindings emulation)
npm run dev
```

For a more production-like local environment:

```bash
npm run cf:dev          # Builds + runs via wrangler dev
```

## Deployment

The site is deployed as a Cloudflare Worker with static asset support.

```bash
# Build + deploy in one command
npm run deploy
```

Or step by step:

```bash
npm run build                    # Outputs to dist/
npx wrangler deploy --config wrangler.worker.jsonc
```

### Important Cloudflare Bindings

- `IMAGES` — Cloudflare Images binding (used for on-demand image optimization)
- `SESSION` — KV namespace (used for sessions)
- `ASSETS` — Static asset binding (serves `dist/client`)

These are defined in both `wrangler.jsonc` (dev) and `wrangler.worker.jsonc` (prod).

## Configuration Files

| File                        | Purpose                                      |
|----------------------------|----------------------------------------------|
| `astro.config.mjs`         | Astro config, Cloudflare adapter, image service |
| `wrangler.jsonc`           | Local development settings + bindings        |
| `wrangler.worker.jsonc`    | Production deployment config                 |
| `public/_headers`          | HTTP headers (caching, security, CSP)        |
| `public/_redirects`        | Redirect rules (trailing slashes, canonical domain) |

## Image & Performance Strategy

- Critical above-the-fold images are moved into `src/assets/images/` and imported using Astro’s `<Image>` component.
- All other images use the Astro `<Image>` component (or `<Image inferSize>` in the gallery) for automatic modern format generation.
- Long-term immutable caching (`max-age=31536000, immutable`) is applied to all hashed assets.
- HTML responses use `stale-while-revalidate` for a balance of freshness and speed.
- Contact/booking pages are marked `private` to avoid caching form state.

## License

Private project. All rights reserved.

---

Built with care for performance, SEO, and the North West’s best dancefloors. 🎧