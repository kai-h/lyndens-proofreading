# Lynden's Proofreading

Website for Lynden Howells — professional proofreader and copyeditor based in Hobart, Tasmania.

**Live site:** [lyndensproofreading.com](https://lyndensproofreading.com)

## Tech stack

- [Astro](https://astro.build) — static site generator
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting and CDN
- [Formspree](https://formspree.io) — contact form backend
- [Fontsource](https://fontsource.org) — self-hosted fonts (DM Serif Display, Inter)

## Pages

| Route | Page |
|---|---|
| `/` | Home — intro, services overview, testimonials, CTA |
| `/services` | Proofreading, editorial services, tenders, rates |
| `/faq` | Frequently asked questions (FAQPage schema) |
| `/contact` | Contact form and details |
| `/sitemap.xml` | XML sitemap |

## SEO

See [SEO-CHECKLIST.md](SEO-CHECKLIST.md) for a full list of what's implemented and what's still to do.

Structured data implemented:
- `LocalBusiness` schema (all pages)
- `FAQPage` schema (`/faq`)
- `BreadcrumbList` schema (all interior pages)

## Local development

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` deploy automatically via Cloudflare Pages.

Build settings:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js version:** 22

Asset caching is configured via `public/_headers`.

## Contact form

The contact form uses Formspree (form ID: `xdaywdvy`). No further configuration needed.
