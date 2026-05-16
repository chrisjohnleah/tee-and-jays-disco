# AGENTS.md — TeeJays Disco

**This is a private project.** Do not share code, structure, business details, or repository information outside this repo.

The guidelines below are adapted from Andrej Karpathy’s core principles for working with LLMs on code. They bias toward caution, minimalism, and verifiability.

---

## 1. Think Before Coding

**Don’t assume. Don’t hide confusion. Surface tradeoffs.**

Before writing or editing any code:

- State your assumptions explicitly in your thinking (e.g., “I am assuming this page is statically prerendered”, “I assume the image is in `public/images/`”, “I assume we want to keep the existing data shape in `site.ts`”).
- If something is unclear (data shape, routing behaviour, Cloudflare binding, image optimisation path, etc.), stop and name what is confusing. Ask before proceeding.
- If multiple reasonable interpretations exist, present them instead of silently choosing one.
- If a simpler or more boring approach exists than what you first thought of, say so and prefer it.

**Project-specific expectations:**
- Never guess whether a route should be SSR or prerendered — check the actual page file and existing patterns.
- When working with images, explicitly state whether you plan to use an imported asset (`src/assets/images/`) or a public path with `<Image inferSize>`.
- When touching any location or service page, first confirm the data source (`src/data/services.ts`, `areas.ts`, or `site.ts`).

---

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- Write the smallest possible change that meets the actual request.
- No new abstractions, components, or “flexibility” unless explicitly asked for.
- No error handling or defensive code for scenarios that cannot realistically occur in this project.
- If you can solve it in 30 lines instead of 120, do the 30-line version.
- Do not introduce new libraries, state management, or build tools.

**Project-specific rules:**
- Prefer adding data to the existing modules in `src/data/` over creating new files or systems.
- For new service or location pages, copy the established pattern rather than inventing a “better” structure.
- Do not create new wrapper components around Astro’s `<Image>` unless there is an extremely strong, documented reason.
- Do not add new Cloudflare bindings, KV namespaces, or wrangler features unless the task explicitly requires it.

Ask yourself: “Would a senior engineer look at this diff and say it is overcomplicated for what was asked?” If the answer is yes, simplify.

---

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Only modify the lines that are directly required by the current task.
- Do not “improve”, reformat, or refactor adjacent code, comments, or unrelated functions “while you’re there”.
- Match the existing style and patterns exactly, even if you personally prefer something different.
- If your change makes an import, variable, or function unused, remove it. Do not remove pre-existing dead code unless asked.
- Never refactor a component or data structure that is not directly involved in the requested change.

**Project-specific rules:**
- When editing a page in `src/pages/`, do not touch other pages or shared components unless the task requires it.
- When working on image optimisation, only change the specific images or components mentioned. Do not globally “upgrade” the image strategy.
- Changes to `public/_headers` or `public/_redirects` must be intentional and minimal — these files affect the entire production site.
- Do not touch `wrangler.jsonc` or `wrangler.worker.jsonc` unless the task is explicitly about deployment or bindings.

**The test:** Every line you change must be traceable back to the user’s request. If you cannot explain why a line was modified, revert it.

---

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Turn every request into clear, verifiable goals before you start coding.

Examples:
- “Add a new birthday party location page” → “Create the page file + data entry, run `npm run build`, and confirm the page appears in the sitemap with correct priority.”
- “Improve LCP on the homepage” → “Move the hero to `src/assets/images/`, switch to `<Image fetchpriority="high">`, run a production build, and verify the image is served with proper `srcset` and modern formats.”
- “Fix the contact form” → “Reproduce the issue locally, make the minimal fix, run `npm run build`, and confirm the form still works in the preview.”

**Mandatory verification step for this project:**

After every non-trivial change you **must** run:

```bash
npm run build
```

The build must complete successfully with no errors or warnings before you consider the task done.

For multi-step work, state a short plan with verification points, for example:

1. Update data in `src/data/site.ts` → verify: `npm run build` passes
2. Add new `<Image>` usage in component → verify: build succeeds and image has proper `width`/`height`
3. Update `_headers` if needed → verify: build succeeds (headers are static)

Only mark the task complete when the success criteria have been met and verified by running the build.

---

## Additional Project Rules

- **Never edit anything inside `dist/`** — it is generated.
- The two canonical deployment commands are `npm run deploy` and `npx wrangler deploy --config wrangler.worker.jsonc`.
- All static assets that should be long-cached live under `public/`. All critical imported images live under `src/assets/images/`.
- This site is performance-sensitive. Any change that could affect Core Web Vitals (especially LCP, CLS, or image loading) must be explicitly called out and verified via build.

---

**Summary of mindset:**  
Be extremely careful, extremely minimal, and extremely verifiable. When in doubt, make the change smaller, read more files, and run the build again.