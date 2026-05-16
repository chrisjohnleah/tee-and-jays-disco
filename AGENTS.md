# AGENTS.md — TeeJays Disco

This is a **private project**. Do not share code, structure, or details outside this repository.

## Core Philosophy (Karpathy Style)

- **Make the smallest possible change that solves the actual problem.** Avoid over-engineering, premature abstraction, or "future-proofing".
- **Read the relevant file(s) first.** Never edit code you haven't read in the current session.
- **Run the build after every meaningful change.** Use `npm run build` (or `npm run deploy`) to verify. Do not assume it works.
- **Prefer boring, proven solutions.** When in doubt, copy the existing pattern in the codebase rather than inventing a new one.
- **Surface assumptions explicitly.** If you're making a guess about data shape, user flow, or edge case, state it clearly.
- **Delete code > Add code.** If a change can be achieved by removing complexity instead of adding it, do that.
- **One logical change per commit.** Keep diffs small and reviewable.

## Project Context

- **TeeJays Disco** — Professional mobile DJ website (Tony & John, 35+ years experience).
- Built with **Astro 6 (SSR mode)** + **Cloudflare Workers + Assets**.
- Heavy emphasis on **programmatic SEO** (many location + service pages).
- Strong focus on **performance** (Core Web Vitals, image optimization, caching).
- Uses Cloudflare Images binding + Astro's `<Image>` component.

## Technology Rules

### Astro & Code Style
- Always prefer the **Astro `<Image>` component** (from `astro:assets`) over raw `<img>` tags for new work.
- Critical above-the-fold images belong in `src/assets/images/` and should be imported.
- Data lives in `src/data/` (especially `site.ts`, `services.ts`, `areas.ts`). Add new content there first before creating pages.
- Follow existing patterns for service hubs and location pages (`/wedding-djs/[slug]`, etc.).
- Use `export const prerender = true` on static pages where appropriate.

### Cloudflare & Deployment
- **Never** manually edit anything inside `dist/`.
- Deployment happens via `npm run deploy` (builds + runs `wrangler deploy --config wrangler.worker.jsonc`).
- Caching and security rules live in:
  - `public/_headers`
  - `public/_redirects`
  - `wrangler.worker.jsonc` (assets section)
- Changes to headers/redirects require a full deploy to take effect.
- The `IMAGES` and `SESSION` KV bindings are defined in both wrangler configs.

### Images & Performance
- When adding new images, consider whether they should be:
  1. Imported via Astro `<Image>` (best for important/above-the-fold)
  2. Served from `public/images/` with the `<Image>` component + `inferSize`
- Long-term immutable caching (`max-age=31536000, immutable`) should apply to all hashed assets.
- HTML pages generally use `stale-while-revalidate`.

## Development Workflow

1. **Before starting work**, run `git status` and understand what branch you're on.
2. Make the smallest viable change.
3. Run `npm run build` and confirm it succeeds with no errors.
4. If working on images or performance, consider running a local Lighthouse check or build timing.
5. Commit with clear, conventional commit messages.
6. For large refactors or risky changes, create a backup tag first:
   ```bash
   git tag backup-$(date +%Y-%m-%d-%H%M)
   ```

## What Not To Do

- Do **not** introduce new frameworks, UI libraries, or state management unless there is a very strong, documented reason.
- Do **not** create new component abstraction layers without first trying to solve the problem with existing components.
- Do **not** touch the large gallery arrays or service data without reading the full context in `src/data/`.
- Do **not** assume a route is static or dynamic — check the actual page file.
- Avoid "nice to have" refactors during feature work. Keep changes surgical.

## When Making Changes

Ask yourself:
- What is the **minimal** diff that achieves the goal?
- Have I read the file I'm about to edit in this session?
- Can I verify this with `npm run build`?
- Am I following the existing pattern, or inventing something new?
- What assumptions am I making about data or user flow?

## Private Project Notes

- This repository is private.
- Do not reference real client data, exact pricing, or internal business details in public contexts.
- The site contains real photography — treat it with respect.

---

**Goal**: Ship high-quality, fast, SEO-effective pages with minimal complexity and maximum reliability. When in doubt, make it smaller and simpler.