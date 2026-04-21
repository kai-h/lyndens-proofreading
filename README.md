# Lynden's Proofreading

Website for Lynden Howells — professional proofreader and copyeditor based in Hobart, Tasmania.

**Live site:** [lyndensproofreading.com](https://lyndensproofreading.com)

## Tech stack

- [Astro](https://astro.build) — static site generator
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)
- Contact form via [Formspree](https://formspree.io)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Lynden |
| `/services` | Proofreading & Editorial Services |
| `/tenders` | Tender Documents |
| `/testimonials` | Testimonials |
| `/rates` | Rates & Turnaround |
| `/contact` | Contact |

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

## Contact form setup

The contact form at `/contact` uses Formspree. To activate it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. Replace `YOUR_FORM_ID` in `src/pages/contact.astro` with your actual ID
