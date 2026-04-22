import type { APIRoute } from 'astro';

const site = 'https://lyndensproofreading.com';

const pages = [
  { url: '/',          priority: '1.0', changefreq: 'monthly' },
  { url: '/services/', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq/',      priority: '0.8', changefreq: 'monthly' },
  { url: '/contact/',  priority: '0.7', changefreq: 'yearly'  },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ url, priority, changefreq }) => `  <url>
    <loc>${site}${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
