# SEO Checklist — Lynden's Proofreading

Last updated: April 2026

---

## ✅ Done — Technical (in-site)

- [x] Unique `<title>` and `<meta name="description">` on every page
- [x] `<link rel="canonical">` on every page
- [x] `lang="en-AU"` on `<html>` element
- [x] Open Graph tags (title, description, image, URL, locale, site name)
- [x] OG image dimensions and alt text
- [x] Twitter/X Card meta tags
- [x] `robots.txt` with sitemap reference
- [x] Flat `sitemap.xml` with priority and changefreq for all pages
- [x] `LocalBusiness` JSON-LD schema (name, address, areaServed, services, founder)
- [x] `FAQPage` JSON-LD schema on `/faq`
- [x] `BreadcrumbList` JSON-LD schema on all interior pages
- [x] Self-hosted fonts via `@fontsource` (no render-blocking Google Fonts request)
- [x] Cloudflare `_headers` file for long-term asset caching
- [x] Static site output (fast TTFB, good Core Web Vitals baseline)
- [x] SVG favicon matching brand palette
- [x] Keyword-rich page titles and meta descriptions
- [x] No-AI / no-subcontractor / no-voice-to-text differentiator in copy
- [x] International reach signals in copy and schema (Australia, USA, Japan)
- [x] 45+ years experience prominently featured throughout

---

## 🔲 To Do — Off-site (no code changes required)

### High priority

- [ ] **Google Business Profile** — create at [business.google.com](https://business.google.com)
  - Add business name, address (Hobart TAS), website, service area
  - Upload Lynden's photo
  - Write a business description using key terms (proofreader, Tasmania, Australia)
  - Select relevant categories (e.g. Proofreading Service, Editing Service)

- [x] **Google Search Console** — verified and sitemap submitted

- [ ] **Bing Webmaster Tools** — verify at [bing.com/webmasters](https://www.bing.com/webmasters)
  - Submit sitemap
  - Captures traffic from Bing and Microsoft Copilot

- [ ] **Google Reviews** — ask existing clients to leave a Google review
  - Even 3–5 genuine reviews significantly improve local ranking and click-through rate
  - Requires Google Business Profile to be set up first

### Medium priority

- [ ] **Directory listings** — consistent NAP (Name, Address, Phone) across:
  - [True Local](https://www.truelocal.com.au)
  - [Yellow Pages AU](https://www.yellowpages.com.au)
  - [Yelp AU](https://www.yelp.com.au)
  - [Hot Frog AU](https://www.hotfrog.com.au)
  - [StartLocal](https://www.startlocal.com.au)

- [ ] **IPEd membership** — [Institute of Professional Editors](https://www.iped-editors.org)
  - Accredited member directory is a primary resource for businesses seeking editors
  - Adds a trust and credibility signal to the site once listed

- [ ] **LinkedIn profile** for Lynden Howells
  - Link to `lyndensproofreading.com`
  - Many corporate clients (annual reports, tenders) search LinkedIn first

- [ ] **More testimonials** — currently 2; aim for 4–6
  - Particularly valuable if they name recognisable organisations
  - Add to the homepage as they come in

### Longer term

- [ ] **Blog or resources section** — biggest remaining SEO gap
  - Suggested articles (all strong for long-tail search):
    - *"Proofreading vs copyediting — what's the difference?"*
    - *"Common errors in Australian tender documents"*
    - *"Why spellcheck isn't enough"*
    - *"Australian vs American English: a quick guide"*
    - *"What to send your proofreader: a checklist"*

- [ ] **Backlinks** — get linked from relevant Australian sites
  - Any professional body directories (IPEd, Editors Australia)
  - Local Hobart or Tasmanian business directories
  - Client websites (a small "edited by" credit where appropriate)

---

## 🔲 To Do — Technical (future improvements)

- [x] **WebP images** — `lynden.jpeg` and `site-header.jpg` converted via Astro's
  `<Image>` component (headshot: 23kB → 8kB)
- [ ] **Pricing detail** — once confirmed with Lynden, add a specific rate range
  to the FAQ answer for "How much does it cost?" (even a ballpark improves conversion)
- [ ] **Phone number** — if Lynden is comfortable listing it, add to Contact page
  and `LocalBusiness` schema (`"telephone"` field)
- [ ] **`AggregateRating` schema** — once Google Reviews are established, add
  star rating schema to boost click-through rate in search results
