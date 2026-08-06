import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = (process.env.VITE_SITE_URL || "https://mayurindiankitchen.com").replace(/\/$/, "");
const routes = [
  "/",
  "/menu",
  "/our-story",
  "/offers",
  "/gallery",
  "/blog",
  "/blog/best-indian-food-dubai-business-bay",
  "/blog/biryani-near-burj-khalifa",
  "/blog/halal-restaurant-dubai-downtown",
  "/blog/indian-food-guide-russians-dubai",
  "/blog/best-samosa-dubai",
  "/blog/vegetarian-food-dubai-indian",
  "/blog/indian-breakfast-business-bay-dubai",
  "/blog/late-night-indian-restaurant-business-bay",
  "/blog/family-indian-restaurant-near-dubai-mall",
  "/blog/indian-food-delivery-business-bay-downtown",
  "/tourist-guide",
  "/tourist-guide/indians-in-dubai",
  "/tourist-guide/pakistanis-in-dubai",
  "/tourist-guide/bangladeshis-in-dubai",
  "/tourist-guide/russians-in-dubai",
  "/tourist-guide/western-tourists-dubai",
  "/tourist-guide/filipinos-in-dubai",
  "/contact",
  "/privacy",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`;

await Promise.all([
  writeFile(resolve("public/sitemap.xml"), sitemap),
  writeFile(resolve("public/robots.txt"), robots),
]);
