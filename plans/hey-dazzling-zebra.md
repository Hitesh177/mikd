# Mayur International Kitchen Dubai — Multi-Page Website Plan

## Context

The client is MIKd1 (Mayur International Kitchen Dubai), the 15th branch of a 15-year-old Indian restaurant brand from Taiwan, now opening its first UAE location at Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai. The primary goals are:

1. Drive organic foot traffic and delivery orders via local SEO
2. Rank for dish-level, landmark-proximity, and nationality-targeted searches
3. Serve as a credible, premium digital presence that converts tourists and residents
4. No AI-generated fluff — all content is rooted in real menu items, real story, real location

Brand language from the menu: **black (#0A0A0A) + gold (#C9A227)** — luxury Indian restoran identity. Tagline: *"Taste the Tradition, Feel the Authenticity."*

---

## Site Architecture (Pages via React Router)

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero carousel, featured dishes, story snippet, SEO-rich intro |
| `/menu` | Full Menu | All categories, filterable, with prices in AED |
| `/our-story` | Our Story | Chef Mayur's journey, Taiwan → Dubai, 15 years of excellence |
| `/gallery` | Gallery | Food & restaurant photo grid (Unsplash for food photography) |
| `/blog` | Blog Index | SEO blog listing |
| `/blog/:slug` | Blog Post | Individual SEO articles |
| `/tourist-guide` | Tourist Guide Index | Landing for nationality-targeted guides |
| `/tourist-guide/:nationality` | Guide Detail | Indians, Pakistanis, Bangladeshis, Russians, Westerners |
| `/contact` | Contact & Location | Map embed, phone, address, hours |

---

## Tech Stack

- **React 18 + React Router v6** (multi-page routing)
- **Tailwind CSS** — black/gold brand tokens applied to `theme.css`
- **motion/react** — hero carousel transitions, menu card reveals
- **Unsplash MCP** — real food photography for hero + gallery
- **lucide-react** — icons (MapPin, Phone, Clock, Star, ChevronLeft/Right)
- **Google Fonts** — `Playfair Display` (headings, regal) + `Inter` (body, clean) written to `fonts.css`

---

## Design Tokens (theme.css updates)

Inspired by reference image: warm cream background, saffron/terracotta accent, deep brown text — vibrant and food-forward. Gold retained for brand badges and logo.

Keep all existing token names. Only update values:

```
--background: #FAF6EF          (warm cream — light, inviting)
--foreground: #1E0F00          (deep espresso brown)
--primary: #C9600A             (saffron terracotta — bold, warm)
--primary-foreground: #FFFFFF
--card: #FFFFFF
--card-foreground: #1E0F00
--border: rgba(201,96,10,0.15) (terracotta border, subtle)
--muted: #F2EBE0
--muted-foreground: #7A5C40
--accent: #C9A227              (gold — used for logo, badges, price labels)
--accent-foreground: #1E0F00
```

Navbar and Footer remain dark: `#1A0A00` (dark espresso) with gold text — anchors the premium feel at top and bottom while the page body breathes with warmth.

---

## Page-by-Page Implementation Detail

### 1. Home (`/`)

**Hero Carousel** — 5 slides, auto-advance 5s, smooth crossfade:
- Slide 1: Chicken Biriyani — "Dubai's Most Authentic Biryani"
- Slide 2: Mixed Grill / Charcoal chicken — "Charcoal-Kissed, Tandoor-Perfect"
- Slide 3: Butter Chicken / Curry spread — "Recipes Perfected Over 15 Years"
- Slide 4: Fresh Juices + Lassi — "From Mango Lassi to Aam Panna"
- Slide 5: Restaurant exterior / Dubai skyline — "Business Bay's Finest Indian Kitchen"

Each slide: full-viewport HD image (Unsplash), H1 headline, H2 sub-headline, CTA buttons ("View Menu" + "Order Now / Call Us"). Image has `alt` text matching SEO keywords.

**Below-hero sections (in order):**
1. **Trust bar** — Halal certified · 15 years of excellence · Free home delivery · 15 branches worldwide
2. **Featured Dishes** — 6 bestsellers (Chicken Karahi AED 22, Chicken Biriyani AED 16, Charcoal Full AED 56, Fresh Aloo Samosa AED 4, Mango Lassi AED 12, Butter Chicken AED 23) with Unsplash food photos, dish name, price, "Add to Order" linking to `/menu`
3. **Our Story Snippet** — 3-line story of Chef Mayur, photo placeholder, link to `/our-story`
4. **Why MIK?** — 4 pillars: Halal Certified · Trained in 5-Star Hotels (Taj, Oberoi, Marriott, Westin) · Dine-in + Free Delivery · 100+ Menu Items
5. **Menu Preview Tabs** — Biriyani / Karahi / Grill / Beverages quick-tab strip
6. **Find Us** — embedded Google Maps iframe for Business Bay location + phone numbers
7. **SEO Rich Footer** — full address, all keywords, social links, Google Review link

### 2. Menu (`/menu`)

Category tabs at top (sticky): All · Biriyani · Curry · Grill · Shawarma · Breads · Beverages · Snacks · Specials · Burgers · Wraps · Salads

Each item card: food photo (Unsplash or placeholder), dish name (H3), description (1 line), price in AED, Veg/Best Seller badge where applicable.

Full categories from PDF:
- Fresh Juice, Mocktails, Lassi, Milk Shakes, Healthy Combination, Mojito
- Charcoal & Grill, Tandoori Garam, Breads & More
- Turkish Shawarma, Chinese Fried Rice, Chinese Noodles
- Delicious Biriyani, Afghani Pulao
- Curry Dishes, Special Karahi & Handi
- MIK Special (fish, veg, sizzler, vegetarian, Mexican, Italian, Punjabi specials)
- Club Sandwiches, Parotta Sandwiches, Tortilla Wrap, McBaba Burgers
- Salads, Side Dishes, Tea Corner, Maggi, Snacks & Others

### 3. Our Story (`/our-story`)

H1: "The Story Behind MIKd1 — 15 Years of Culinary Excellence"

Content sections (real, no fiction):
- Chef Mayur Srivastava's journey: started age 6 in mother's kitchen
- Hotel Management School → Taj, Oberoi, Marriott, Westin
- 2011: First Mayur Kitchen near Taipei 101
- Today: 15 restaurants + 5 grocery stores across Taiwan and UAE
- Philosophy: Fresh Ingredients · Authentic Flavours · Impeccable Hygiene · Guest Satisfaction
- Notable guests: dignitaries, corporate leaders, international visitors in Taiwan
- Dubai debut: "Bringing Taiwan's most trusted Indian brand to the UAE"

### 4. Gallery (`/gallery`)

Masonry grid of real food photography sourced via Unsplash MCP:
- Queries: "indian food curry", "biryani", "tandoori chicken", "samosa", "mango lassi", "naan bread", "kebab grill", "shawarma"
- Alt text on every image follows SEO pattern: "Chicken Biryani at Mayur International Kitchen Dubai Business Bay"

### 5. Blog (`/blog` + `/blog/:slug`)

**6 SEO Blog Articles (static content, real and useful):**

1. `best-indian-food-dubai-business-bay` — "Best Indian Food in Business Bay Dubai 2025" (targets: best indian food dubai, indian restaurant business bay)
2. `biryani-near-burj-khalifa` — "Where to Find the Best Biryani Near Burj Khalifa" (targets: biryani near burj khalifa, biryani downtown dubai)
3. `halal-restaurant-dubai-downtown` — "Top Halal Restaurants Near Dubai Downtown — A Complete Guide" (targets: halal food dubai downtown)
4. `indian-food-guide-russians-dubai` — "Indian Food in Dubai: A Guide for Russian Visitors" (targets: indian restaurant dubai for russians, русский ресторан Дубай)
5. `best-samosa-dubai` — "Where to Get the Best Samosa in Dubai" (targets: best samosa dubai, samosa near me dubai)
6. `vegetarian-food-dubai-indian` — "Best Vegetarian Indian Food in Dubai — Dal Tadka to Palak Paneer" (targets: vegetarian indian food dubai)

Each blog post: 500-700 words, H1 + H2 subheadings, internal links to `/menu`, structured data-ready (publishedDate, author).

### 6. Tourist Guide (`/tourist-guide` + `/tourist-guide/:nationality`)

**5 nationality guides:**

| Slug | Target | Angle |
|---|---|---|
| `indians-in-dubai` | Indian expats & tourists | Taste of home: dal chawal, butter chicken, karak chai, paani poori |
| `pakistanis-in-dubai` | Pakistani community | Karahi, Nihari-style dishes, Afghani Pulao, Lassi |
| `bangladeshis-in-dubai` | Bangladeshi workers & tourists | Fish fry, biryani, dal, affordable meals under AED 20 |
| `russians-in-dubai` | Russian tourists | Gentle intro to Indian food, what to order first, mild options |
| `western-tourists-dubai` | Europeans, Americans | First Indian food experience, what dishes are safe for beginners |

Each guide: 400-600 words, H1 "Indian Food in Dubai for [Nationality]", dish recommendations, price transparency, how to get there from major landmarks.

### 7. Contact (`/contact`)

- H1: "Visit Us at Business Bay, Dubai"
- Full address: Shop No. 5, The Metropolis Tower, Burj Khalifa Street Near Downtown, Business Bay, Dubai, UAE
- Phone: 054 996 6937 | 054 996 6938 (click-to-call links)
- Google Maps iframe embed (coordinates from Maps URL)
- Hours (placeholder — to be filled by client)
- WhatsApp CTA button
- Free delivery note

---

## SEO Implementation Rules

### Meta tags (per page):
- `<title>` — unique, keyword-rich, under 60 chars
- `<meta name="description">` — 150-160 chars, includes location + main keyword
- `<meta name="keywords">` — supplementary
- `<link rel="canonical">` — self-referencing

### Structured Data (JSON-LD in `<head>`):
- `Restaurant` schema on Home and Contact: name, address, geo, telephone, servesCuisine, menu, hasMap
- `BreadcrumbList` on all inner pages
- `Article` schema on blog posts
- `FAQPage` on tourist guides

### Heading hierarchy:
- One `<h1>` per page, includes primary keyword
- `<h2>` for section headings (menu categories, blog subheadings)
- `<h3>` for dish names in menu cards
- Never skip levels

### Image alt text pattern:
`[Dish Name] at Mayur International Kitchen Dubai, Business Bay`

### Internal linking:
- Every blog post links to `/menu` at least twice
- Tourist guides link to both `/menu` and `/contact`
- Home links to all major pages

### Additional SEO suggestions for client (to discuss):
- Google Business Profile claimed and filled
- Submit sitemap to Google Search Console
- Schema markup for "near me" proximity queries
- Add customer review widget (Google Reviews embed)
- WhatsApp Business integration for orders
- Zomato / Talabat / Noon Food listing links in footer

---

## Component File Structure

All code lives in `src/app/App.tsx` as a self-contained multi-page React app with React Router. Sub-components defined in the same file or split into logical sections:

- `<Navbar>` — sticky, black/gold, logo placeholder, nav links, "Order Now" CTA
- `<HeroCarousel>` — 5 slides, motion/react transitions
- `<MenuPage>` — category tabs + item grid
- `<BlogPost>` — rendered from static data object keyed by slug
- `<TouristGuide>` — rendered from static data object keyed by nationality slug
- `<Footer>` — address, phone, social icons, keyword-rich location paragraph

---

## Verification

1. Install `react-router-dom` if not present (`npm install react-router-dom`)
2. Navigate to each route and confirm H1 renders correctly
3. Check no page has more than one `<h1>`
4. Confirm alt text on all images
5. Confirm phone numbers are `<a href="tel:...">` links
6. Confirm Maps embed loads (may need CSP header for iframe)
7. Confirm Unsplash images load (via MCP search during build)
8. Confirm carousel auto-advances and arrow controls work

---

## Files Modified

| File | Change |
|---|---|
| `src/app/App.tsx` | Full replacement — multi-page React app |
| `src/styles/fonts.css` | Add Playfair Display + Inter Google Fonts import |
| `src/styles/theme.css` | Update color tokens to black/gold brand palette |
