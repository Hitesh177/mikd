import { useEffect, useState, useRef } from "react";
import logoImg from "@/imports/Black-Before.png";
import galleryTandooriRotiBasket from "@/imports/gallery/tandoori-roti-basket.jpg";
import galleryGarlicNaan from "@/imports/gallery/garlic-naan.jpg";
import galleryRotiStack from "@/imports/gallery/roti-stack.jpg";
import galleryTandooriChickenLegs from "@/imports/gallery/tandoori-chicken-legs.jpg";
import galleryChickenKebab from "@/imports/gallery/chicken-kebab.jpg";
import galleryChickenTikka from "@/imports/gallery/chicken-tikka.jpg";
import galleryTandooriWings from "@/imports/gallery/tandoori-wings.jpg";
import galleryTandooriChickenPlate from "@/imports/gallery/tandoori-chicken-plate.jpg";
import heroThaliServing from "@/imports/hero/thali-serving.jpg";
import heroRestaurantInterior from "@/imports/hero/restaurant-interior.jpg";
import menuHeroVideo from "@/imports/video/menu-hero.mp4";
import menuHeroPoster from "@/imports/video/menu-hero-poster.jpg";
import galleryHeroVideo from "@/imports/video/gallery-hero.mp4";
import galleryHeroPoster from "@/imports/video/gallery-hero-poster.jpg";
import blogHeroVideo from "@/imports/video/blog-hero.mp4";
import blogHeroPoster from "@/imports/video/blog-hero-poster.jpg";
import guidesHeroVideo from "@/imports/video/guides-hero.mp4";
import guidesHeroPoster from "@/imports/video/guides-hero-poster.jpg";
import contactHeroVideo from "@/imports/video/contact-hero.mp4";
import contactHeroPoster from "@/imports/video/contact-hero-poster.jpg";
import storyTandooriChickenLeg from "@/imports/story/tandoori-chicken-leg-poster.jpg";
import storyPorattaShawarma from "@/imports/story/poratta-shawarma-poster.jpg";
import storySamosa from "@/imports/story/samosa-poster.jpg";
import storyKarakChai from "@/imports/story/karak-chai-poster.jpg";
import storyCheeseNaan from "@/imports/story/cheese-naan-poster.jpg";
import storyChefPortrait from "@/imports/story/chef-mayur-portrait.jpg";
import storyTaiwanSketch from "@/imports/story/mayur-kitchen-taiwan-sketch.jpg";
import storyVisitUsCta from "@/imports/story/visit-us-cta.jpg";
import storyChefGuests from "@/imports/story/chef-mayur-guests.jpg";
import storyVintageMarigolds from "@/imports/story/vintage-marigolds.mp4";
import storyVintageMarigoldsPoster from "@/imports/story/vintage-marigolds-poster.jpg";
import storyKarahiParotta from "@/imports/story/karahi-parotta.jpg";
import featuredKarakChai from "@/imports/featured/karak-chai-home.png";
import brandAuthenticFlavors from "@/imports/brand-panels/authentic-flavors.png";
import brandCraftedWithCare from "@/imports/brand-panels/crafted-with-care.png";
import brandGoodFoodAnywhere from "@/imports/brand-panels/good-food-anywhere.png";
import brandTraditionInnovation from "@/imports/brand-panels/tradition-innovation.png";
import brandHeartOfDubai from "@/imports/brand-panels/heart-of-dubai.png";
import brandClickAway from "@/imports/brand-panels/click-away.png";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useLocation,
} from "react-router";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Youtube,
  Facebook,
  Search,
  Pause,
  Play,
  ShieldCheck,
  ChefHat,
  Bike,
  UtensilsCrossed,
  ShoppingBag,
  ExternalLink,
  BadgePercent,
} from "lucide-react";

const SITE_NAME = "Mayur International Kitchen Dubai";
const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/favicon.png`;
const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Mayur%20International%20Kitchen%20Dubai%2C%20The%20Metropolis%20Tower%2C%20Business%20Bay%2C%20Dubai";
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const DELIVERY_LINKS = [
  { name: "Deliveroo", href: "https://deliveroo.ae/en/menu/dubai/dubai-canal-walk/burger-bae-cafe", note: "Listed as Burger BAE Cafe · delivery prices may differ" },
  { name: "Zomato", href: "https://www.zomato.com/dubai/burger-bae-business-bay", note: "Legacy listing · details may be outdated" },
];
const BRAND_PANELS = [
  { src: brandAuthenticFlavors, alt: "Chef illustration — Authentic flavors, timeless experiences" },
  { src: brandCraftedWithCare, alt: "Serving cloche illustration — Crafted with care, served with pride" },
  { src: brandGoodFoodAnywhere, alt: "Takeaway bag illustration — Good food, good mood, anywhere" },
  { src: brandTraditionInnovation, alt: "Tradition and innovation food journey illustration" },
  { src: brandHeartOfDubai, alt: "Mayur Indian Kitchen in the heart of Dubai illustration" },
  { src: brandClickAway, alt: "Mobile ordering illustration — Great food, just a click away" },
];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (localStorage.getItem("mik-cookie-consent") !== "accepted" || !GA_MEASUREMENT_ID) return;
  window.gtag?.("event", name, params);
}

const restaurantImg = storyVisitUsCta;
const tandooriImg = storyTandooriChickenLeg;
const parottaImg = storyPorattaShawarma;
const samosaImg = storySamosa;
const chaiImg = storyKarakChai;
const cheeseNaanImg = storyCheeseNaan;
const storyHeroImg = storyChefGuests;
const chefPortrait = storyChefPortrait;
const chefGroup = storyChefGuests;
const storyDishImg = "/images/blog/curry-rice.png";
const recipeBook = storyTaiwanSketch;

// ─── Data ────────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    img: galleryHeroPoster,
    h1: "Business Bay's Finest Indian Kitchen",
    h2: "Minutes from Burj Khalifa and Downtown Dubai — dine in or order online.",
    cta: "Find Us",
    ctaLink: "/contact",
  },
  {
    img: heroRestaurantInterior,
    h1: "Some meals fill your stomach.",
    h2: "Ours bring you home.",
    cta: "View Full Menu",
    ctaLink: "/menu",
    layout: "split",
  },
  {
    img: heroThaliServing,
    h1: "Welcome to Mayur Kitchen Dubai.",
    h2: "Dine in at our Business Bay location — steps from Burj Khalifa Street.",
    cta: "Find Us",
    ctaLink: "/contact",
  },
];

const FEATURED = [
  {
    name: "Chicken Biriyani",
    desc: "Aromatic Basmati rice layered with tender chicken and whole spices.",
    price: "AED 13",
    img: "/images/blog/biryani-naan.png",
    badge: "Best Seller",
  },
  {
    name: "Butter Chicken",
    desc: "Slow-simmered tomato-cream gravy with perfectly spiced chicken.",
    price: "AED 19.25",
    img: storyDishImg,
    badge: "Fan Favourite",
  },
  {
    name: "Karak Chai",
    desc: "A warm, comforting cup of milk tea brewed with bold flavour.",
    price: "AED 1.50",
    img: featuredKarakChai,
    badge: "Tea Corner",
  },
  {
    name: "Chicken Karahi",
    desc: "Traditional wok-cooked karahi with tomatoes, ginger and green chillies.",
    price: "AED 19.25",
    img: "/images/blog/blog-07-curry-heritage.png",
    badge: "Best Seller",
  },
  {
    name: "Fresh Aloo Samosa",
    desc: "Crispy pastry filled with spiced potatoes — served with tamarind chutney.",
    price: "AED 4",
    img: storySamosa,
    badge: "Street Favourite",
  },
  {
    name: "Mango Lassi",
    desc: "Thick, chilled yogurt blended with fresh Alphonso mango pulp.",
    price: "AED 12",
    img: "/images/mango-lassi.png",
    badge: "Must Try",
  },
];

const MENU_CATEGORIES = [
  {
    id: "biryani",
    label: "Biriyani",
    items: [
      { name: "Charcoal Biriyani Qtr", price: "22" },
      { name: "Charcoal Biriyani Half", price: "32" },
      { name: "Paneer Biriyani", price: "16" },
      { name: "Prawns Biriyani", price: "28" },
      { name: "Dal Chawal", price: "14" },
      { name: "Chicken Biriyani", price: "13" },
      { name: "Beef Biriyani", price: "16" },
      { name: "Mutton Biriyani", price: "18" },
      { name: "Egg Biriyani", price: "12" },
      { name: "Veg Biriyani", price: "12" },
      { name: "Tandoori Leg Biriyani", price: "24" },
      { name: "Chicken Tikka Biriyani", price: "27" },
      { name: "Kabab Biriyani", price: "29" },
    ],
  },
  {
    id: "pulao",
    label: "Afghani Pulao",
    items: [
      { name: "Chicken Pulao", price: "16" },
      { name: "Hammour Fish Pulao", price: "27.50" },
      { name: "Mutton Afghani Pulao", price: "32.50" },
      { name: "Afghani Tikka Pulao", price: "26" },
      { name: "Afghani Kabab Pulao Chicken", price: "28" },
      { name: "Afghani Kabab Pulao Beef", price: "30" },
      { name: "Mutton Pulao", price: "18" },
      { name: "Mandi Pulao Qtr", price: "24" },
      { name: "Mandi Pulao Half", price: "33" },
    ],
  },
  {
    id: "curry",
    label: "Curry Dishes",
    items: [
      { name: "Chicken Karahi", price: "19.25" },
      { name: "Chicken Achari", price: "21.50" },
      { name: "Chicken White Handi", price: "23.75" },
      { name: "Butter Chicken", price: "19.25" },
      { name: "Chicken Tikka Masala", price: "19.25" },
      { name: "Chicken Ginger", price: "19.50" },
      { name: "Chicken Masala", price: "16" },
      { name: "Chicken Korma", price: "17.50" },
      { name: "Beef Karahi", price: "21.50" },
      { name: "Beef Achari", price: "23" },
      { name: "Beef White Handi", price: "24" },
      { name: "Beef Masala", price: "17" },
      { name: "Mutton Karahi", price: "24" },
      { name: "Mutton Peshwari", price: "25.50" },
      { name: "Mutton Achari", price: "23.50" },
      { name: "Mutton White Handi", price: "28" },
      { name: "Palak Gosht", price: "19.75" },
      { name: "Dal Gosht", price: "19.50" },
      { name: "Aloo Gosht", price: "19.50" },
    ],
  },
  {
    id: "karahi",
    label: "Special Karahi & Handi",
    items: [
      { name: "Paneer Karahi", price: "18" },
      { name: "Paneer Butter Masala", price: "18" },
      { name: "Prawns Karahi", price: "24" },
      { name: "Prawns Butter Masala", price: "24" },
    ],
  },
  {
    id: "special",
    label: "Our Special",
    items: [
      { name: "King Fish Fry", price: "20" },
      { name: "King Fish Curry", price: "18" },
      { name: "Palak Paneer", price: "15.50" },
      { name: "Dal Tadka", price: "8.50" },
      { name: "Mix Veg Masala", price: "9" },
      { name: "Bhindi Fry", price: "13" },
      { name: "Chicken 65", price: "19.75" },
      { name: "Chicken Manchurian", price: "19.75" },
      { name: "Chicken Chilly", price: "19.75" },
    ],
  },
  {
    id: "grill",
    label: "Charcoal & Grill",
    items: [
      { name: "Chicken Charcoal QTR", price: "20" },
      { name: "Chicken Charcoal Half", price: "30" },
      { name: "Chicken Charcoal Full", price: "50" },
      { name: "Pepper Chicken Charcoal QTR", price: "22" },
      { name: "Pepper Chicken Charcoal Half", price: "32" },
      { name: "Pepper Chicken Charcoal Full", price: "52" },
      { name: "Shish Tawook", price: "24" },
      { name: "Chicken Kabab", price: "25" },
      { name: "Mutton / Beef Kabab", price: "30" },
      { name: "Chicken Wings", price: "25" },
      { name: "Mixed Grill 1/4 Kg", price: "49" },
      { name: "Mixed Grill Half Kg", price: "78" },
      { name: "Mixed Grill 1 Kg", price: "136" },
      { name: "Paneer Tikka Full", price: "25" },
      { name: "Tandoor Chicken Leg (4pc)", price: "28" },
      { name: "Tandoori Chicken Half", price: "30" },
      { name: "Tandoori Chicken Full", price: "55" },
    ],
  },
  {
    id: "breads",
    label: "Tandoori Garam & Breads",
    items: [
      { name: "Tandoor Chicken Leg (4pc) — Garam", price: "32" },
      { name: "Tandoori Chicken Half — Garam", price: "32" },
      { name: "Tandoori Chicken Full — Garam", price: "58" },
      { name: "Plain Naan", price: "3" },
      { name: "Tandoori Roti", price: "2.50" },
      { name: "Butter Naan", price: "5" },
      { name: "Garlic Naan", price: "8" },
      { name: "Spices Naan", price: "8" },
      { name: "Sweet Coconut Naan", price: "10" },
      { name: "Sweet Chocolate Naan", price: "10" },
      { name: "Potato Naan", price: "8" },
      { name: "Onion Naan", price: "8" },
      { name: "Cheese Naan", price: "10" },
      { name: "Lacha Paratha", price: "2" },
      { name: "Aloo Paratha", price: "6.75" },
    ],
  },
  {
    id: "shawarma",
    label: "Delicious Shawarma",
    items: [
      { name: "Arabic Shawarma", price: "21.50" },
      { name: "Supreme Shawarma", price: "12.75" },
      { name: "Plate Shawarma", price: "26" },
      { name: "Shawarma Mexican Normal", price: "10" },
      { name: "Shawarma Mexican Large", price: "11" },
      { name: "Hussan Mathar", price: "11" },
      { name: "Poratta Shawarma", price: "11" },
      { name: "Shawarma Kuwait", price: "17" },
    ],
  },
  {
    id: "fried-rice",
    label: "Fried Rice",
    items: [
      { name: "Schezwan Fried Rice", price: "19.50" },
      { name: "Chicken Fried Rice", price: "16" },
      { name: "Egg Fried Rice", price: "14.50" },
      { name: "Beef Fried Rice", price: "17.25" },
      { name: "Prawns Fried Rice", price: "19" },
      { name: "Mix Fried Rice", price: "19.75" },
      { name: "Veg Fried Rice", price: "13.75" },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    items: [
      { name: "Schezwan Noodles", price: "19.75" },
      { name: "Chicken Noodles", price: "16.75" },
      { name: "Egg Noodles", price: "14.75" },
      { name: "Prawns Noodles", price: "20.75" },
      { name: "Mix Noodles", price: "22" },
      { name: "Veg Noodles", price: "14.50" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Alfredo Pasta Chicken", price: "25" },
      { name: "Alfredo Pasta Veg", price: "22" },
      { name: "Mix Seafood Pasta", price: "28" },
      { name: "Beef Pasta", price: "26" },
      { name: "Beef Bolognese Pasta", price: "24.75" },
      { name: "Penne Arrabiata Pasta", price: "20" },
      { name: "Pink Sauce Seafood Pasta", price: "28" },
    ],
  },
  {
    id: "fried",
    label: "Tasty Fried Items",
    items: [
      { name: "Fries w. Cheese", price: "14" },
      { name: "Dynamite Potato", price: "16" },
      { name: "Mix Potato W. Cheese", price: "16" },
      { name: "Dynamite Chicken", price: "17" },
      { name: "Dynamite Prawns", price: "22" },
      { name: "Mozzarella Sticks 7 Pcs", price: "17" },
      { name: "French Fries", price: "8" },
      { name: "Potato Rings", price: "12" },
      { name: "Potato Wedges", price: "8" },
      { name: "Chicken Fillet 4 Pcs", price: "18" },
      { name: "Hotdog", price: "11" },
      { name: "Nuggets Plate 8 Pcs", price: "17" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Aloo Paratha", price: "6.75" },
      { name: "Fresh Paratha", price: "1.50" },
      { name: "Wheat Paratha", price: "1.50" },
      { name: "Kerala Paratha", price: "1.50" },
      { name: "Chappathi", price: "1.25" },
      { name: "Chicken Paratha", price: "8.75" },
      { name: "Keema Paratha", price: "9" },
      { name: "Masala Dosa", price: "6.75" },
      { name: "Ghee Roast", price: "6" },
      { name: "Egg Dosa", price: "6.75" },
      { name: "Dosa Set", price: "6" },
      { name: "Idly Set", price: "6" },
      { name: "Aloo Keema", price: "11.50" },
      { name: "Egg Tomato Burji", price: "8.50" },
      { name: "Egg Omelette Single", price: "3" },
      { name: "Egg Omelette Double", price: "5" },
      { name: "Fried Egg", price: "5" },
      { name: "Chole Poori Halwa", price: "10" },
      { name: "Brain Fry", price: "14" },
      { name: "Chana Masala", price: "8" },
      { name: "Egg Roast", price: "10" },
      { name: "Beef Nihari", price: "15" },
      { name: "Mutton Paya", price: "20" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks & Others",
    items: [
      { name: "Bread and Butter (2 Slice)", price: "5" },
      { name: "Bread and Jam (2 Slice)", price: "5" },
      { name: "Cheese and Chicken Sandwich", price: "10" },
      { name: "Spring Roll Veg/Chicken 5 Pcs", price: "12" },
      { name: "Samosa Chicken (2 Pcs)", price: "3" },
      { name: "Samosa Veg (2 Pcs)", price: "2" },
      { name: "Samosa Aloo (2 Pcs)", price: "2" },
    ],
  },
  {
    id: "maggi",
    label: "Maggi",
    items: [
      { name: "Garlic Chilli Maggi", price: "12" },
      { name: "Desi Tadka Maggi", price: "12" },
      { name: "Cheesy Vegetable Maggi", price: "13" },
    ],
  },
  {
    id: "fresh-juice",
    label: "Fresh Juice",
    items: [
      { name: "Pineapple", price: "13" },
      { name: "Avocado", price: "13" },
      { name: "Watermelon", price: "13" },
      { name: "Lemon", price: "12" },
      { name: "Banana", price: "13" },
      { name: "Lemon Mint", price: "16" },
      { name: "Orange", price: "16" },
      { name: "Pomegranate", price: "17" },
      { name: "Carrot", price: "16" },
      { name: "Tender Coconut (Thai Style)", price: "16" },
      { name: "Mango", price: "16" },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails",
    items: [
      { name: "Fruit Mocktail", price: "18" },
      { name: "Cucumber Cooler", price: "18" },
      { name: "Masala Lemon Cola", price: "18" },
      { name: "Lemon Shikanji with Chia Seeds", price: "18" },
      { name: "Black Currant Booster", price: "18" },
      { name: "Aam Panna", price: "18" },
    ],
  },
  {
    id: "lassi",
    label: "Lassi",
    items: [
      { name: "Sweet & Salt Lassi", price: "10" },
      { name: "Strawberry Lassi", price: "12" },
      { name: "Pineapple Lassi", price: "12" },
      { name: "Fruit Lassi", price: "15" },
      { name: "Mango Lassi", price: "12" },
      { name: "Banana Lassi", price: "12" },
    ],
  },
  {
    id: "milkshakes",
    label: "Milk Shakes",
    items: [
      { name: "Date and Banana", price: "15" },
      { name: "Mango", price: "15" },
      { name: "Strawberry", price: "15" },
      { name: "Oreo", price: "15" },
      { name: "Kinder", price: "15" },
      { name: "Nutella", price: "15" },
      { name: "Cold Coffee", price: "15" },
    ],
  },
  {
    id: "healthy",
    label: "Healthy Combinations",
    items: [
      { name: "Iron Booster", price: "15" },
      { name: "Power Booster", price: "15" },
      { name: "Hangover Cure", price: "15" },
      { name: "Liver Cure", price: "15" },
    ],
  },
  {
    id: "mojito",
    label: "Mojito",
    items: [
      { name: "Strawberry Mojito", price: "15" },
      { name: "Blue Hawaii Mojito", price: "15" },
      { name: "Lemon Mint Mojito", price: "15" },
      { name: "Pomegranate Mojito", price: "15" },
    ],
  },
  {
    id: "tea",
    label: "Tea Corner",
    items: [
      { name: "Black Coffee", price: "3" },
      { name: "Black Tea", price: "1" },
      { name: "Green Tea", price: "1.50" },
      { name: "Lemon Mint Tea", price: "1.50" },
      { name: "Ginger Tea", price: "2" },
      { name: "Karak Special", price: "1.50" },
      { name: "Fresh Milk Tea", price: "2.50" },
      { name: "Hot Chocolate", price: "10" },
      { name: "Nescafe", price: "4" },
    ],
  },
];

const MENU_PRICE_LOOKUP = new Map(
  MENU_CATEGORIES.flatMap((category) => category.items.map((item) => [item.name.toLowerCase(), item.price] as const)),
);

const MENU_PRICE_ALIASES: Record<string, string> = {
  "chicken biryani": "Chicken Biriyani",
  "mutton biryani": "Mutton Biriyani",
  "veg biryani": "Veg Biriyani",
  "fish biryani": "King Fish Biriyani",
  "fish biriyani": "King Fish Biriyani",
  "charcoal full chicken": "Chicken Charcoal Full",
  "charcoal half chicken": "Chicken Charcoal Half",
  "charcoal chicken full": "Chicken Charcoal Full",
  "charcoal chicken half": "Chicken Charcoal Half",
  "mixed grill quarter": "Mixed Grill 1/4 Kg",
  "mixed grill half kg": "Mixed Grill Half Kg",
  "mango shake": "Mango",
  "dal makhani": "Dal Tadka",
  "garlic naan": "Garlic Naan",
  "karak chai": "Karak Special",
  "masala chai": "Fresh Milk Tea",
  "fresh aloo samosa": "Samosa Aloo (2 Pcs)",
  "aloo samosa": "Samosa Aloo (2 Pcs)",
  "chicken samosa": "Samosa Chicken (2 Pcs)",
};

function menuPrice(name: string) {
  const canonical = MENU_PRICE_ALIASES[name.toLowerCase()] || name;
  return MENU_PRICE_LOOKUP.get(canonical.toLowerCase());
}

function normalizeMenuPrices(text: string) {
  const names = Array.from(new Set([
    ...Object.keys(MENU_PRICE_ALIASES),
    ...Array.from(MENU_PRICE_LOOKUP.keys()),
  ])).filter((name) => name.length >= 7 || name in MENU_PRICE_ALIASES).sort((a, b) => b.length - a.length);

  return names.reduce((result, name) => {
    const price = menuPrice(name);
    if (!price) return result;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return result.replace(
      new RegExp(`(${escaped})([^\\n]{0,45}?AED\\s*)\\d+(?:\\.\\d+)?`, "gi"),
      `$1$2${price}`,
    );
  }, text);
}

const REAL_GALLERY_IMAGES = [
  { src: galleryTandooriChickenLegs, alt: "Charcoal Tandoori Chicken Legs at Mayur International Kitchen Dubai" },
  { src: galleryChickenKebab, alt: "Chicken Seekh Kebab at MIK Dubai" },
  { src: galleryChickenTikka, alt: "Chicken Tikka Skewers at Mayur International Kitchen Business Bay" },
  { src: galleryTandooriWings, alt: "Tandoori Chicken Wings at MIK Dubai" },
  { src: galleryTandooriChickenPlate, alt: "Tandoori Chicken Platter at Mayur International Kitchen Dubai" },
  { src: galleryGarlicNaan, alt: "Fresh Garlic Naan at MIK Dubai" },
  { src: galleryTandooriRotiBasket, alt: "Tandoori Roti Basket at Mayur International Kitchen Dubai" },
  { src: galleryRotiStack, alt: "Fresh Roti Stack at MIK Dubai" },
];

const COMBO_OFFERS = [
  { num: 1, name: "Singaporean Fried Rice", free: [], from: "27", to: "22.5" },
  { num: 2, name: "Tandoori Chicken", note: "Extra Breast Piece +2 AED", free: [], sizes: [
    { label: "Quarter", from: "28", to: "22" },
    { label: "Half", from: "42", to: "35" },
  ] },
  { num: 3, name: "Supreme Shawarma", free: ["French Fries", "Masala Lemon Cola"], from: "30", to: "18.5" },
  { num: 4, name: "Mega Zinger Burger", free: ["French Fries", "Masala Tea or Lemon Shikanji"], from: "36", to: "26" },
  { num: 5, name: "Dal Tadka", free: ["Plain Rice", "Chapati"], from: "19", to: "14.5" },
  { num: 6, name: "Masala Dosa", free: ["Idli", "Sambar", "Coconut Chutney"], from: "15", to: "8.5" },
  { num: 7, name: "Aloo/Onion Paratha", free: ["Curd", "Tea", "Achar"], from: "15", to: "9.5" },
  { num: 8, name: "Chicken Biryani", free: ["Raita/Gravy", "Mocktail"], from: "33", to: "22" },
];

const BLOGS = [
  {
    slug: "best-indian-food-dubai-business-bay",
    title: "Best Indian Food in Business Bay Dubai 2025",
    excerpt: "Looking for the best Indian restaurant in Business Bay? Here's why Mayur International Kitchen is the top choice for residents and tourists alike.",
    date: "2025-06-10",
    img: "/images/blog/chef-kitchen.png",
    content: [
      { type: "h1", text: "Best Indian Food in Business Bay Dubai 2025" },
      { type: "p", text: "Business Bay has become one of Dubai's most vibrant dining districts — home to corporate towers, luxury hotels, and a melting pot of cuisines. But if you're searching for the best Indian food in Business Bay Dubai, one name stands out: Mayur International Kitchen Dubai (MIKd1)." },
      { type: "h2", text: "Why MIK Dubai Is Business Bay's Best Indian Restaurant" },
      { type: "p", text: "Located at Shop No. 5, The Metropolis Tower, Burj Khalifa Street, MIK Dubai is the first international branch of a 15-year-old restaurant brand from Taiwan. Chef Mayur Srivastava trained in five-star hotels including the Taj, Oberoi, Marriott, and Westin — and it shows in every dish." },
      { type: "h3", text: "What Makes MIK Dubai Different?" },
      { type: "li", text: "100% Halal certified — every ingredient and preparation method follows strict halal standards." },
      { type: "li", text: "Authentic recipes, not shortcuts — no pre-mixed masalas, no frozen patties. Everything is made fresh daily." },
      { type: "li", text: "15 years of excellence — the MIK brand has served lakhs of customers in Taiwan before bringing its kitchen to Dubai." },
      { type: "li", text: "Delivery available — order from your office or hotel and get it delivered fresh." },
      { type: "h2", text: "Top Dishes to Try" },
      { type: "h3", text: "Chicken Biryani (AED 13)" },
      { type: "p", text: "Slow-cooked Dum Biryani using aged Basmati rice, whole spices, and tender chicken. This is the dish that put MIK on the map in Taiwan — and it's even better in Dubai." },
      { type: "h3", text: "Chicken Karahi (AED 19.25)" },
      { type: "p", text: "Wok-cooked in a traditional iron karahi with tomatoes, fresh ginger, green chillies, and hand-ground spices. Served with hot naan — this is the taste of Old Lahore." },
      { type: "h3", text: "Charcoal Full Chicken (AED 50)" },
      { type: "p", text: "A whole chicken marinated overnight in yogurt and spices, then grilled over live charcoal. The smokiness is real, not artificial." },
      { type: "h3", text: "Fresh Aloo Samosa (2 pcs — AED 2)" },
      { type: "p", text: "Crispy, golden pastry filled with spiced potato — served with house-made tamarind chutney. At AED 2 for two pieces, it's one of the best-value snacks in Business Bay." },
      { type: "h2", text: "How to Get There" },
      { type: "p", text: "MIK Dubai is located in The Metropolis Tower, Burj Khalifa Street — a 5-minute drive from Burj Khalifa and 10 minutes from Dubai Mall. The Business Bay Metro Station is within walking distance." },
      { type: "p", text: "Call to reserve or order: 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "biryani-near-burj-khalifa",
    title: "Where to Find the Best Biryani Near Burj Khalifa",
    excerpt: "Visiting the Burj Khalifa? Satisfy your biryani craving at Mayur International Kitchen — just 5 minutes away in Business Bay.",
    date: "2025-06-18",
    img: "/images/blog/biryani-naan.png",
    content: [
      { type: "h1", text: "Where to Find the Best Biryani Near Burj Khalifa" },
      { type: "p", text: "If you're visiting the Burj Khalifa or exploring Downtown Dubai, you don't need to go far to find world-class biryani. Mayur International Kitchen Dubai is located just 5 minutes away in Business Bay — and our biryani has been perfected over 15 years." },
      { type: "h2", text: "The Biryani at MIK Dubai" },
      { type: "p", text: "We serve multiple styles of biryani at Mayur International Kitchen, all cooked fresh to order:" },
      { type: "h3", text: "Chicken Biryani — AED 13" },
      { type: "p", text: "Our signature. Slow-cooked Dum-style with aged Basmati rice, golden onions, saffron, and whole spices. Served with raita and salad." },
      { type: "h3", text: "Mutton Biryani — AED 18" },
      { type: "p", text: "Slow-braised mutton with the bone — the way biryani is meant to be. Rich, aromatic, and deeply satisfying." },
      { type: "h3", text: "Chicken Pulao — AED 16" },
      { type: "p", text: "A beloved Afghan-style rice dish cooked in meat broth with carrots and raisins. Fragrant, slightly sweet, and utterly comforting." },
      { type: "h3", text: "Veg Biryani — AED 12" },
      { type: "p", text: "Seasonal vegetables with aromatic spices and Basmati rice — perfect for vegetarians visiting Dubai." },
      { type: "h2", text: "Getting Here from Burj Khalifa" },
      { type: "p", text: "From Burj Khalifa, take a 5-minute taxi to The Metropolis Tower, Burj Khalifa Street, Business Bay. We're at Shop No. 5, ground level. You can also walk from Business Bay Metro Station in about 8 minutes." },
      { type: "p", text: "Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "halal-restaurant-dubai-downtown",
    title: "Top Halal Restaurants Near Dubai Downtown — A Complete Guide",
    excerpt: "Searching for certified halal food near Downtown Dubai? Mayur International Kitchen in Business Bay is your go-to destination.",
    date: "2025-07-01",
    img: "/images/blog/dubai-skyline.png",
    content: [
      { type: "h1", text: "Top Halal Restaurants Near Dubai Downtown — A Complete Guide" },
      { type: "p", text: "Dubai is a city where halal dining is the standard — but not all restaurants are equal in quality. If you're looking for halal Indian and Pakistani food near Downtown Dubai, Mayur International Kitchen (MIKd1) in Business Bay is the top recommendation." },
      { type: "h2", text: "What Does Halal Mean at MIK Dubai?" },
      { type: "p", text: "At MIK Dubai, halal is not a marketing label — it's a non-negotiable principle. Every ingredient is sourced from halal-certified suppliers. The kitchen maintains strict separation. Our entire menu — from chicken to lamb to cooking oils — meets UAE halal standards." },
      { type: "h2", text: "Best Halal Dishes at MIK Dubai" },
      { type: "h3", text: "Halal Grills" },
      { type: "li", text: "Charcoal Full Chicken (AED 50) — whole halal chicken, live charcoal" },
      { type: "li", text: "Mixed Grill Half Kg (AED 78) — an assorted grilled platter for sharing" },
      { type: "li", text: "Tandoor Chicken Leg (4 pcs, AED 28) — marinated and tandoor-fired" },
      { type: "h3", text: "Halal Curries" },
      { type: "li", text: "Mutton Karahi (AED 24) — the quintessential Pakistani karahi" },
      { type: "li", text: "Beef Nihari (AED 15) — slow-cooked, deeply comforting stew" },
      { type: "li", text: "Dal Gosht (AED 19.50) — lentils and meat cooked with warming spices" },
      { type: "h2", text: "Location" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street Near Downtown, Business Bay, Dubai, UAE. Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "indian-food-guide-russians-dubai",
    title: "Indian Food in Dubai: A Guide for Russian Visitors",
    excerpt: "First time trying Indian food in Dubai? This guide for Russian tourists explains what to order, what to expect, and why MIK Dubai is the perfect introduction.",
    date: "2025-07-10",
    img: "/images/blog/curry-rice.png",
    content: [
      { type: "h1", text: "Indian Food in Dubai: A Guide for Russian Visitors" },
      { type: "p", text: "Дорогие российские гости Дубая! Dubai is home to one of the largest Indian restaurant scenes in the world. If you haven't tried Indian cuisine yet, Mayur International Kitchen in Business Bay is the ideal place to start." },
      { type: "h2", text: "Why Try Indian Food in Dubai?" },
      { type: "p", text: "Indian cuisine is one of the world's most diverse and aromatic food cultures — with influences from Persia, Central Asia, and the Mediterranean. In Dubai, the quality of Indian food is exceptional because the community is large, ingredients are fresh, and competition is high." },
      { type: "h2", text: "What to Order First (Beginner-Friendly Dishes)" },
      { type: "h3", text: "Butter Chicken (AED 19.25)" },
      { type: "p", text: "Murgh Makhani — tender chicken in a rich tomato and cream sauce. Mildly spiced, slightly sweet, deeply comforting. This is the most popular Indian dish worldwide and a perfect introduction." },
      { type: "h3", text: "Chicken Biryani (AED 13)" },
      { type: "p", text: "Fragrant Basmati rice cooked with tender chicken and aromatic whole spices. Not spicy — just wonderfully flavourful." },
      { type: "h3", text: "Mango Lassi (AED 12)" },
      { type: "p", text: "A chilled yogurt drink blended with ripe Alphonso mango. Refreshing, sweet, and the perfect companion to any meal." },
      { type: "h3", text: "Garlic Naan (AED 8)" },
      { type: "p", text: "Fluffy leavened bread baked in a clay tandoor. Use it to scoop up curries — a deeply satisfying experience." },
      { type: "h2", text: "Getting to MIK Dubai" },
      { type: "p", text: "From the Marina or JBR: 20-minute drive. From Downtown Dubai or Burj Khalifa: just 5 minutes by taxi. Call 054 996 6937 — English-speaking staff." },
    ],
  },
  {
    slug: "best-samosa-dubai",
    title: "Where to Get the Best Samosa in Dubai — AED 2 at MIK",
    excerpt: "Fresh, crispy aloo samosas in Dubai — made daily at Mayur International Kitchen, Business Bay. Two pieces for AED 2.",
    date: "2025-07-15",
    img: "/images/blog/samosa-platter.png",
    content: [
      { type: "h1", text: "Where to Get the Best Samosa in Dubai" },
      { type: "p", text: "A samosa is not just a snack — it's a cultural institution. Crispy golden pastry, spiced potato filling, tangy tamarind chutney. Done right, it's one of the most satisfying things you'll ever eat." },
      { type: "h2", text: "Our Fresh Aloo Samosa — 2 Pieces for AED 2" },
      { type: "p", text: "Our Fresh Aloo Samosa is made daily in our kitchen — no frozen batches, no pre-made shells. The filling is a classic aloo masala: boiled potatoes mashed with green peas, fresh coriander, ginger, cumin, and a whisper of chilli." },
      { type: "p", text: "The pastry is hand-crimped, filled to order, and fried until golden. Served with house-made tamarind chutney and mint chutney on the side." },
      { type: "p", text: "Price: AED 2 for 2 pieces." },
      { type: "h2", text: "Chicken Samosa Too" },
      { type: "p", text: "Prefer a non-veg filling? Our Chicken Samosa (2 pcs — AED 3) uses minced chicken spiced with onion, green chilli, and coriander. Same crispy shell, different soul." },
      { type: "h2", text: "When to Eat Samosa at MIK" },
      { type: "li", text: "As a starter before your biryani" },
      { type: "li", text: "With a hot cup of Karak Chai (AED 1.50) in the evening" },
      { type: "li", text: "As a quick snack during your lunch break in Business Bay" },
      { type: "h2", text: "Find Us" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai. Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "vegetarian-food-dubai-indian",
    title: "Best Vegetarian Indian Food in Dubai — Dal Tadka to Palak Paneer",
    excerpt: "A complete vegetarian guide to eating Indian food in Dubai — with the best veg dishes at Mayur International Kitchen, Business Bay.",
    date: "2025-07-20",
    img: "/images/blog/paneer-tikka.png",
    content: [
      { type: "h1", text: "Best Vegetarian Indian Food in Dubai" },
      { type: "p", text: "Indian cuisine is one of the world's great vegetarian food traditions — thousands of years of cooking without meat has produced a vegetarian repertoire that is rich, satisfying, and endlessly varied. At Mayur International Kitchen Dubai, our vegetarian menu is extensive and authentic." },
      { type: "h2", text: "Top Vegetarian Dishes at MIK Dubai" },
      { type: "h3", text: "Dal Tadka (AED 8.50)" },
      { type: "p", text: "Yellow lentils tempered with cumin, mustard seeds, dried red chilli, and a finishing touch of ghee. Simple, nourishing, and deeply comforting. Pair with rice or roti." },
      { type: "h3", text: "Chana Masala (AED 8)" },
      { type: "p", text: "Black lentils slow-cooked overnight with tomatoes and cream. Rich, smoky, and deeply satisfying. A Punjabi classic." },
      { type: "h3", text: "Palak Paneer (AED 15.50)" },
      { type: "p", text: "Fresh spinach puree with cubes of house-made cottage cheese, spiced with ginger and garam masala. Nutritious and delicious." },
      { type: "h3", text: "Paneer Butter Masala (AED 18)" },
      { type: "p", text: "The vegetarian answer to Butter Chicken — paneer in a rich tomato-cream sauce. Excellent with garlic naan." },
      { type: "h3", text: "Veg Biryani (AED 12)" },
      { type: "p", text: "Aromatic Basmati rice with seasonal vegetables and whole spices. A complete meal." },
      { type: "h2", text: "Vegetarian Snacks" },
      { type: "li", text: "Fresh Aloo Samosa (2 pcs) — AED 2" },
      { type: "li", text: "Paneer Tikka Full — AED 25" },
      { type: "li", text: "Chana Masala — AED 8" },
      { type: "li", text: "Masala Dosa — AED 6.75" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai. Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "indian-breakfast-business-bay-dubai",
    title: "Best Indian Breakfast in Business Bay Dubai: What to Order in 2026",
    excerpt: "Looking for an affordable Indian breakfast in Business Bay? Explore fresh parathas, dosa, idli, egg dishes, nihari and chai at MIK Dubai.",
    date: "2026-08-05",
    img: "/images/blog/blog-07-curry-heritage.png",
    content: [
      { type: "h1", text: "Best Indian Breakfast in Business Bay Dubai: What to Order in 2026" },
      { type: "p", text: "A good breakfast in Business Bay needs to do three things: arrive fresh, keep you satisfied through a busy morning, and offer enough choice for different appetites. Mayur International Kitchen Dubai brings North Indian, South Indian and subcontinental breakfast favourites together at Shop No. 5, The Metropolis Tower on Burj Khalifa Street." },
      { type: "h2", text: "South Indian Breakfast: Dosa and Idli" },
      { type: "p", text: "For a lighter start, order a crisp Masala Dosa (AED 6.75), Dosa Set (AED 6) or soft Idly Set (AED 6). These dishes balance texture and flavour without feeling too heavy, making them practical for office mornings, hotel guests and anyone exploring Downtown Dubai." },
      { type: "h2", text: "Fresh Parathas for a Filling Morning" },
      { type: "p", text: "Choose Aloo Paratha (AED 6.75), Chicken Paratha (AED 8.75) or Keema Paratha (AED 9). If you prefer something simple alongside eggs or curry, Fresh Paratha, Wheat Paratha and Kerala Paratha are each AED 1.50." },
      { type: "h2", text: "Classic Desi Breakfast Plates" },
      { type: "p", text: "Chole Poori Halwa (AED 10) combines savoury chickpeas, hot poori and a sweet finish. For a slow-cooked, deeply comforting breakfast, try Beef Nihari (AED 15) or Mutton Paya (AED 20) with naan or roti." },
      { type: "h2", text: "Egg Breakfasts Under AED 10" },
      { type: "p", text: "Quick options include Egg Omelette Single (AED 3), Egg Omelette Double (AED 5), Fried Egg (AED 5) and Egg Tomato Burji (AED 8.50). Pair one with Tandoori Roti (AED 2.50) or Plain Naan (AED 3) for an affordable breakfast in Business Bay." },
      { type: "h2", text: "How to Plan Your Visit" },
      { type: "p", text: "MIK Dubai is in The Metropolis Tower, convenient for Business Bay offices and a short drive from Downtown Dubai. Breakfast-item availability can vary during the day, so call 054 996 6937 before travelling if you have one specific dish in mind." },
    ],
    faq: [
      { question: "Where can I get Indian breakfast in Business Bay?", answer: "Mayur International Kitchen Dubai is at Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, with dosa, idli, parathas, eggs, nihari and other breakfast choices." },
      { question: "What vegetarian Indian breakfast options are available?", answer: "Vegetarian choices include Masala Dosa, Dosa Set, Idly Set, Aloo Paratha, Chole Poori Halwa, Chana Masala and several breads." },
      { question: "Can I find an Indian breakfast under AED 10?", answer: "Yes. Options include Masala Dosa at AED 6.75, Idly Set at AED 6, Aloo Paratha at AED 6.75 and egg dishes starting at AED 3." },
      { question: "Should I confirm breakfast availability?", answer: "Yes. Call 054 996 6937 before your visit if you want a particular breakfast dish, as availability can change during the day." },
    ],
  },
  {
    slug: "late-night-indian-restaurant-business-bay",
    title: "Late-Night Indian Restaurant in Business Bay Dubai: Food Until 2 AM",
    excerpt: "Need late-night Indian food in Business Bay? Discover biryani, curries, charcoal grills and vegetarian favourites near Downtown Dubai.",
    date: "2026-08-05",
    img: "/images/blog/blog-08-biryani-spread.png",
    content: [
      { type: "h1", text: "Late-Night Indian Restaurant in Business Bay Dubai: Food Until 2 AM" },
      { type: "p", text: "Late meetings, evening sightseeing and long travel days do not always fit conventional dinner hours. Mayur International Kitchen Dubai serves Indian and Pakistani comfort food in Business Bay until 2 AM daily, giving residents, office teams and visitors a convenient late-night option near Downtown Dubai." },
      { type: "h2", text: "Late-Night Food for Every Appetite" },
      { type: "p", text: "For a complete one-dish meal, Chicken Biriyani (AED 13) is aromatic, filling and easy to share. Curry lovers can pair Butter Chicken (AED 19.25) with Plain Naan (AED 3), Garlic Naan (AED 8) or Tandoori Roti (AED 2.50)." },
      { type: "h2", text: "Charcoal Grills After Hours" },
      { type: "p", text: "When you want something smoky rather than saucy, choose Charcoal Chicken Half (AED 30) or Full (AED 50). Mixed Grill platters start at AED 49 for a quarter portion and work well when a group wants several grilled flavours at the table." },
      { type: "h2", text: "Vegetarian Late-Night Choices" },
      { type: "p", text: "A late dinner does not need to be meat-heavy. Paneer Butter Masala (AED 18), Dal Tadka (AED 8.50), Chana Masala (AED 8) and Veg Biriyani (AED 12) offer comforting vegetarian combinations with rice or freshly made bread." },
      { type: "h2", text: "Dine In, Collect or Order Delivery" },
      { type: "p", text: "Visit Shop No. 5 at The Metropolis Tower, call 054 996 6937, or use WhatsApp to check current availability and arrange an order. Delivery is available across Business Bay, Downtown Dubai, DIFC and surrounding areas, subject to the platform's live service radius." },
      { type: "h2", text: "Before a Very Late Visit" },
      { type: "p", text: "The current published closing time is 2 AM. Kitchen cut-off times or holiday hours can change, so calling ahead is the safest option when arriving close to closing." },
    ],
    faq: [
      { question: "What time does MIK Dubai close?", answer: "MIK Dubai currently publishes daily hours until 2 AM. Call 054 996 6937 to confirm kitchen service when visiting close to closing or on a public holiday." },
      { question: "Is there late-night Indian food near Downtown Dubai?", answer: "Yes. MIK Dubai is in Business Bay on Burj Khalifa Street, a short drive from Downtown Dubai and Burj Khalifa." },
      { question: "Are vegetarian dishes available late at night?", answer: "The menu includes Paneer Butter Masala, Dal Tadka, Chana Masala, Veg Biriyani and breads. Live availability should be confirmed when ordering." },
      { question: "Can I order late-night Indian food for delivery?", answer: "Delivery is offered through online platforms and direct WhatsApp enquiries, subject to current operating hours and the platform delivery radius." },
    ],
  },
  {
    slug: "family-indian-restaurant-near-dubai-mall",
    title: "Family-Friendly Indian Restaurant Near Dubai Mall & Burj Khalifa",
    excerpt: "Planning a family meal near Dubai Mall? Find shareable Indian grills, curries, biryani and vegetarian dishes minutes away in Business Bay.",
    date: "2026-08-05",
    img: "/images/blog/blog-09-tandoor-grill.png",
    content: [
      { type: "h1", text: "Family-Friendly Indian Restaurant Near Dubai Mall & Burj Khalifa" },
      { type: "p", text: "After a day at Dubai Mall, Burj Khalifa or the Downtown attractions, families often need a relaxed meal with enough variety for everyone. Mayur International Kitchen Dubai is a short drive away in Business Bay, with Indian, Pakistani, vegetarian and charcoal-grilled dishes suited to sharing." },
      { type: "h2", text: "A Menu That Works for Mixed Groups" },
      { type: "p", text: "One table can combine mild Butter Chicken (AED 19.25), Paneer Butter Masala (AED 18), Veg Biriyani (AED 12) and Chicken Biriyani (AED 13). Guests who prefer more heat can ask the team about spice levels before ordering." },
      { type: "h2", text: "Shareable Grills for Family Dinner" },
      { type: "p", text: "Mixed Grill is available in Quarter (AED 49), Half (AED 78) and 1 kg (AED 136) portions, making it easy to match the order to the table size. Add naan, roti, rice and curries so everyone can sample several flavours." },
      { type: "h2", text: "Vegetarian and Familiar Choices" },
      { type: "p", text: "Vegetarian diners can choose dal, paneer, chana, biryani, dosa and fresh breads. Mango Lassi (AED 12) provides a cool, sweet accompaniment for guests who prefer gentler flavours." },
      { type: "h2", text: "Plan a Comfortable Family Visit" },
      { type: "p", text: "MIK Dubai is at ground level, Shop No. 5, The Metropolis Tower, Burj Khalifa Street. Call or WhatsApp before arriving with a larger party so the team can confirm seating, current hours and dish availability." },
      { type: "h2", text: "From Dubai Mall to MIK Dubai" },
      { type: "p", text: "Use the restaurant's Get Directions link for live navigation rather than relying on a fixed travel estimate, because Downtown traffic changes throughout the day. The Business Bay location is also convenient for nearby hotels and offices." },
    ],
    faq: [
      { question: "Is MIK Dubai close to Dubai Mall and Burj Khalifa?", answer: "MIK Dubai is on Burj Khalifa Street in Business Bay, a short drive from Dubai Mall and Burj Khalifa. Use live Google Maps directions for the most accurate route and travel time." },
      { question: "Does the menu have vegetarian food for families?", answer: "Yes. Vegetarian choices include paneer curries, dal, chana, vegetable biryani, dosa, idli and fresh breads." },
      { question: "Can a group share a mixed grill?", answer: "Yes. Mixed Grill is offered in Quarter, Half and 1 kg sizes, with final menu prices of AED 49, AED 78 and AED 136." },
      { question: "Should larger families reserve first?", answer: "Call 054 996 6937 or contact the restaurant on WhatsApp before arriving so the team can confirm seating and current availability." },
    ],
  },
  {
    slug: "indian-food-delivery-business-bay-downtown",
    title: "Indian Food Delivery in Business Bay & Downtown Dubai",
    excerpt: "Order Indian food delivery in Business Bay and Downtown Dubai: biryani, curries, grills and vegetarian dishes from MIK Dubai.",
    date: "2026-08-05",
    img: "/images/blog/blog-10-service-cloche.png",
    content: [
      { type: "h1", text: "Indian Food Delivery in Business Bay & Downtown Dubai" },
      { type: "p", text: "Whether you are ordering lunch for a Business Bay office, dinner at home or a meal to a Downtown Dubai hotel, Mayur International Kitchen Dubai offers Indian and Pakistani food for delivery from The Metropolis Tower." },
      { type: "h2", text: "Three Ways to Order" },
      { type: "p", text: "Contact MIK Dubai directly on WhatsApp, browse the current Deliveroo listing, or check Zomato for restaurant information. Some delivery platforms may still display the former name Burger BAE Cafe; it is the same Business Bay location now operating as Mayur International Kitchen Dubai." },
      { type: "h2", text: "Best Indian Dishes for Delivery" },
      { type: "p", text: "Chicken Biriyani (AED 13) and Veg Biriyani (AED 12) travel particularly well. For a fuller spread, combine Butter Chicken (AED 19.25), Paneer Butter Masala (AED 18), Plain Naan (AED 3) and a Mango Lassi (AED 12)." },
      { type: "h2", text: "Delivery for Offices and Hotels" },
      { type: "p", text: "Add the tower name, office or room number, reception instructions and a reachable UAE phone number. Clear delivery notes help the rider navigate Business Bay's towers and hotel entrances more efficiently." },
      { type: "h2", text: "Check the Live Menu Before Paying" },
      { type: "p", text: "Platform prices, availability, minimum order values and delivery fees can change. The restaurant menu on this website shows final restaurant prices; always review the live platform basket before checkout for delivery-specific charges." },
      { type: "h2", text: "Delivery Areas and Contact" },
      { type: "p", text: "MIK Dubai serves Business Bay, Downtown Dubai, DIFC and nearby areas subject to live delivery coverage. For help with an order, call 054 996 6937 or 054 996 6938." },
    ],
    faq: [
      { question: "Does MIK Dubai deliver in Business Bay?", answer: "Yes. Delivery is available in Business Bay and nearby districts, subject to the live radius, operating hours and rider availability shown by the ordering platform." },
      { question: "Why does a delivery app show Burger BAE Cafe?", answer: "Burger BAE Cafe was the restaurant's former name at the same Business Bay address. The location now operates as Mayur International Kitchen Dubai." },
      { question: "Can I order to a Downtown Dubai hotel or Business Bay office?", answer: "Yes, when the address is inside the active delivery area. Include the building, office or room number, reception instructions and a working phone number." },
      { question: "Are website prices the same as delivery checkout prices?", answer: "The website menu shows final restaurant prices. Delivery services can add their own fees or display platform-specific totals, so check the live basket before placing the order." },
    ],
  },
];

const GUIDES = [
  {
    slug: "indians-in-dubai",
    audience: "India",
    title: "Indian Food in Dubai for Indians",
    subtitle: "A Taste of Home — 5 Minutes from Burj Khalifa",
    img: "/images/guides/india-guide.png",
    content: [
      { type: "h1", text: "Indian Food in Dubai for Indians — A Taste of Home" },
      { type: "p", text: "Whether you're an Indian expat in Business Bay or a tourist on a short visit, finding food that tastes exactly like home can be a challenge in Dubai. At Mayur International Kitchen Dubai (MIKd1), we've brought the full breadth of Indian home cooking to the heart of Business Bay." },
      { type: "h2", text: "Why MIK Dubai Feels Like Home" },
      { type: "p", text: "Chef Mayur Srivastava started cooking at age 6 in his mother's kitchen in India. After training at the Taj, Oberoi, Marriott, and Westin, he opened his first restaurant in Taipei in 2011. The food at MIK is not adapted for foreign tastes — it is authentic Indian cooking, made with imported spices, fresh ingredients, and genuine technique." },
      { type: "h2", text: "Dishes You'll Find Here (Just Like Home)" },
      { type: "li", text: "Dal Tadka — AED 8.50" },
      { type: "li", text: "Chana Masala — AED 8" },
      { type: "li", text: "Paneer Butter Masala — AED 18" },
      { type: "li", text: "Chole Poori Halwa — AED 10" },
      { type: "li", text: "Masala Dosa with sambar — AED 6.75" },
      { type: "li", text: "Idly Set — AED 6" },
      { type: "li", text: "Chicken Biryani (Dum style) — AED 13" },
      { type: "li", text: "Karak Chai — AED 1.50 | Masala Chai — AED 2.50" },
      { type: "li", text: "Aam Panna — AED 18 | Lemon Shikanji with Chia Seeds — AED 18" },
      { type: "h2", text: "Getting Here" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai. Call 054 996 6937 | WhatsApp for orders and reservations." },
    ],
  },
  {
    slug: "pakistanis-in-dubai",
    audience: "Pakistan",
    title: "Indian & Pakistani Food in Dubai for Pakistanis",
    subtitle: "Karahi, Pulao, Nihari — Cooked the Way Your Mother Makes It",
    img: "/images/guides/pakistan-guide.png",
    content: [
      { type: "h1", text: "Indian & Pakistani Food in Dubai for Pakistanis" },
      { type: "p", text: "Dubai has a large and proud Pakistani community — and Pakistani food culture is deeply embedded in the city's dining scene. At Mayur International Kitchen Dubai, we honour the shared culinary heritage of the subcontinent with dishes that Pakistanis will immediately recognise as authentic." },
      { type: "h2", text: "Pakistani-Favourite Dishes at MIK Dubai" },
      { type: "h3", text: "Karahi" },
      { type: "p", text: "The crown jewel of Pakistani cooking. Our Chicken Karahi (AED 19.25) and Mutton Karahi (AED 24) are cooked in a heavy iron wok with tomatoes, fresh ginger, green chillies, and hand-ground spices. Served with hot naan." },
      { type: "h3", text: "Afghani Pulao" },
      { type: "p", text: "A nod to the region's comforting rice dishes. Chicken Pulao AED 16 | Mutton Pulao AED 18 — cooked with aromatic whole spices." },
      { type: "h3", text: "Nihari & Haleem" },
      { type: "li", text: "Beef Nihari (AED 15) — slow-cooked, deeply comforting stew" },
      { type: "li", text: "Dal Gosht (AED 19.50) — lentils and meat cooked with warming spices" },
      { type: "h3", text: "Grills" },
      { type: "li", text: "Chicken Kabab — AED 25" },
      { type: "li", text: "Mutton / Beef Kabab — AED 30" },
      { type: "li", text: "Charcoal Full Chicken — AED 50" },
      { type: "h3", text: "Breads & Drinks" },
      { type: "li", text: "Plain Naan AED 3 | Lacha Paratha AED 2 | Tandoori Roti AED 2.50" },
      { type: "li", text: "Sweet & Salt Lassi AED 10 | Fresh Milk Tea AED 2.50 | Karak Chai AED 1.50" },
      { type: "h2", text: "Location" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai. Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "bangladeshis-in-dubai",
    audience: "Bangladesh",
    title: "Indian Food in Dubai for Bangladeshis",
    subtitle: "Familiar Flavours, Fair Prices — in the Heart of Business Bay",
    img: "/images/guides/bangladesh-guide.png",
    content: [
      { type: "h1", text: "Indian Food in Dubai for Bangladeshis — Familiar Flavours" },
      { type: "p", text: "For Bangladeshis living or visiting Dubai, finding food that feels familiar — rice-based, fish-forward, moderately spiced — can sometimes be a challenge. At Mayur International Kitchen Dubai, our menu spans the full subcontinent and includes many dishes that will feel like home." },
      { type: "h2", text: "Familiar Dishes for Bangladeshis" },
      { type: "h3", text: "Rice Dishes" },
      { type: "li", text: "Chicken Biriyani (AED 13) — aromatic Basmati rice with tender chicken" },
      { type: "li", text: "Dal Chawal (AED 14) — a simple, comforting rice-and-lentil meal" },
      { type: "li", text: "Egg Fried Rice (AED 14.50)" },
      { type: "h3", text: "Fish Dishes" },
      { type: "li", text: "Prawns Biriyani (AED 28) — aromatic rice with tender prawns" },
      { type: "li", text: "King Fish Curry (AED 18) — cooked with tomatoes and spices" },
      { type: "li", text: "King Fish Fry (AED 20) — crisp, savoury and freshly cooked" },
      { type: "li", text: "Prawns Karahi (AED 24) — prawns cooked in a richly spiced sauce" },
      { type: "h3", text: "Dal & Vegetables" },
      { type: "li", text: "Dal Tadka (AED 8.50) — a comforting everyday dal" },
      { type: "li", text: "Bhindi Fry (AED 13) — a homestyle vegetable favourite" },
      { type: "li", text: "Mix Veg Masala (AED 9)" },
      { type: "h2", text: "Affordable Meal Under AED 25" },
      { type: "p", text: "Try: Dal Chawal (AED 14) + Aloo Samosa (2 pcs, AED 2) = a complete, filling meal for AED 16." },
      { type: "h2", text: "Location & Contact" },
      { type: "p", text: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai, UAE. Call 054 996 6937 | 054 996 6938" },
    ],
  },
  {
    slug: "russians-in-dubai",
    audience: "Russia",
    title: "Indian Food in Dubai: Guide for Russian Tourists",
    subtitle: "Your First Indian Food Experience — Made Comfortable and Delicious",
    img: "/images/guides/russia-guide.png",
    content: [
      { type: "h1", text: "Indian Food in Dubai: Guide for Russian Tourists" },
      { type: "p", text: "Индийская еда в Дубае для российских туристов — Russian tourists are one of Dubai's largest visitor groups, and many are curious about Indian food but unsure where to start. At Mayur International Kitchen Dubai, we welcome first-time Indian food adventurers with a menu ranging from mild and creamy to bold and aromatic." },
      { type: "h2", text: "Start Here: Your First Indian Meal" },
      { type: "h3", text: "Butter Chicken (AED 19.25) — Recommended for beginners" },
      { type: "p", text: "Murgh Makhani — tender chicken in a rich tomato and cream sauce. Mildly spiced, slightly sweet, very approachable. The most loved Indian dish worldwide." },
      { type: "h3", text: "Chicken Biryani (AED 13)" },
      { type: "p", text: "Fragrant rice with spiced chicken — not overly hot, just beautifully aromatic." },
      { type: "h3", text: "Garlic Naan (AED 8)" },
      { type: "p", text: "Fluffy bread baked in a clay oven. Use it to scoop up curries — an experience in itself." },
      { type: "h3", text: "Mango Lassi (AED 12)" },
      { type: "p", text: "A sweet, chilled yogurt-mango drink. Refreshing and helps balance any spice." },
      { type: "h2", text: "What Is Not Spicy at All" },
      { type: "li", text: "Afghani Pulao — mildly sweet rice dish with meat and vegetables" },
      { type: "li", text: "Paneer Butter Masala — cheese cubes in cream-tomato sauce" },
      { type: "li", text: "Mango Shake (AED 15) — mango blended into a chilled shake" },
      { type: "h2", text: "Getting to MIK Dubai" },
      { type: "li", text: "From JBR/Marina: 20 min taxi" },
      { type: "li", text: "From Dubai Mall/Burj Khalifa: 5 min taxi" },
      { type: "li", text: "From Business Bay Metro Station: 8 min walk" },
      { type: "p", text: "Call 054 996 6937 — English-speaking staff available." },
    ],
  },
  {
    slug: "western-tourists-dubai",
    audience: "International",
    title: "Indian Food in Dubai for Western Tourists",
    subtitle: "Your Essential Guide to Ordering Indian Food in Dubai",
    img: "/images/guides/western-tourists-guide.png",
    content: [
      { type: "h1", text: "Indian Food in Dubai for Western Tourists — Your Essential Guide" },
      { type: "p", text: "If you're visiting Dubai from Europe, North America, or Australia, the Indian food at Mayur International Kitchen Dubai is on another level. Fresh ingredients, authentic technique, and a menu that ranges from gently spiced to blazingly hot — whatever you prefer." },
      { type: "h2", text: "Your First Visit: What to Order" },
      { type: "h3", text: "Butter Chicken (AED 19.25)" },
      { type: "p", text: "The gold standard. Chicken in a rich, mildly sweet tomato-cream sauce. Goes perfectly with Garlic Naan (AED 8)." },
      { type: "h3", text: "Tandoor Chicken Leg (4 pcs, AED 28)" },
      { type: "p", text: "Marinated chicken grilled in a tandoor. Smoky, juicy, and not too spicy. Great as a starter." },
      { type: "h3", text: "Mango Lassi (AED 12)" },
      { type: "p", text: "Sweet, chilled, and refreshing. Order one immediately." },
      { type: "h2", text: "If You Like a Bit of Heat" },
      { type: "li", text: "Chicken Karahi (AED 19.25) — Tomato-based wok curry. Medium heat, big flavour." },
      { type: "li", text: "Chicken Kabab (AED 25) — Spiced chicken kebabs off the grill." },
      { type: "h2", text: "Adventurous Options" },
      { type: "li", text: "Charcoal Half Chicken (AED 30) — Whole marinated chicken, live charcoal-grilled." },
      { type: "li", text: "Mixed Grill Half Kg (AED 78) — An assorted grilled spread for sharing." },
      { type: "h2", text: "Spice Guide" },
      { type: "p", text: "We adjust heat levels on request. Just tell your server: Mild / No chilli — Medium — Spicy / Extra hot." },
      { type: "h2", text: "Getting Here" },
      { type: "p", text: "From Dubai Mall or Burj Khalifa: 5 min by taxi to The Metropolis Tower, Burj Khalifa Street, Business Bay. Call 054 996 6937 | English-speaking staff." },
    ],
  },
];

// ─── Shared Components ────────────────────────────────────────────────────────

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function MotionPreferences() {
  const reducedMotion = usePrefersReducedMotion();
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.dataset.reducedMotion = reducedMotion ? "true" : "false";
    document.querySelectorAll("video").forEach((video) => {
      if (reducedMotion) video.pause();
      else if (video.autoplay) void video.play().catch(() => undefined);
    });
  }, [reducedMotion, pathname]);
  return null;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

function SiteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const blog = pathname.startsWith("/blog/") ? BLOGS.find((item) => `/blog/${item.slug}` === pathname) : undefined;
    const guide = pathname.startsWith("/tourist-guide/") ? GUIDES.find((item) => `/tourist-guide/${item.slug}` === pathname) : undefined;
    const staticSeo: Record<string, { title: string; description: string; image?: string }> = {
      "/": {
        title: "Mayur International Kitchen Dubai | Indian Restaurant in Business Bay",
        description: "Authentic Indian and Pakistani cuisine in Business Bay, Dubai. Explore our halal menu, order via WhatsApp, or visit us near Burj Khalifa.",
        image: SLIDES[0].img,
      },
      "/menu": { title: "Indian Restaurant Menu & Prices | MIK Dubai", description: "Explore 100+ Indian, Pakistani and international dishes with current AED prices at Mayur International Kitchen Dubai.", image: menuHeroPoster },
      "/our-story": { title: "Our Story | Mayur International Kitchen Dubai", description: "Discover Chef Mayur Srivastava's journey from five-star hotel kitchens to Mayur International Kitchen in Business Bay, Dubai.", image: storyChefPortrait },
      "/offers": { title: "Restaurant Deals & Combo Offers | MIK Dubai", description: "Explore current combo meal deals at Mayur International Kitchen Dubai in Business Bay, with direct WhatsApp ordering and final offer prices.", image: storyDishImg },
      "/gallery": { title: "Food & Restaurant Gallery | MIK Dubai", description: "See the dishes, grills, breads and atmosphere at Mayur International Kitchen Dubai in Business Bay.", image: galleryHeroPoster },
      "/blog": { title: "Indian Food Blog & Dubai Dining Guides | MIK Dubai", description: "Practical guides to Indian food, halal dining, biryani and eating near Downtown Dubai and Burj Khalifa.", image: blogHeroPoster },
      "/tourist-guide": { title: "Dubai Indian Food Visitor Guides | MIK Dubai", description: "Indian food guides for visitors to Dubai, with dish recommendations, spice guidance and directions to our Business Bay restaurant.", image: guidesHeroPoster },
      "/contact": { title: "Contact, Hours & Directions | MIK Dubai Business Bay", description: "Find Mayur International Kitchen Dubai at The Metropolis Tower, Business Bay. View opening hours, phone numbers and Google Maps directions.", image: contactHeroPoster },
      "/privacy": { title: "Privacy & Cookie Policy | MIK Dubai", description: "Learn how Mayur International Kitchen Dubai handles website analytics, cookie choices and contact interactions." },
    };
    const missing = (!blog && pathname.startsWith("/blog/")) || (!guide && pathname.startsWith("/tourist-guide/")) || (!staticSeo[pathname] && !blog && !guide);
    const entry = blog
      ? { title: `${blog.title} | MIK Dubai`, description: blog.excerpt, image: blog.img }
      : guide
        ? { title: `${guide.title} | MIK Dubai`, description: guide.subtitle, image: guide.img }
        : staticSeo[pathname] || { title: "Page Not Found | MIK Dubai", description: "The requested page could not be found." };
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const image = new URL(entry.image || DEFAULT_SOCIAL_IMAGE, SITE_URL).href;

    document.title = entry.title;
    upsertMeta('meta[name="description"]', { name: "description", content: entry.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: missing ? "noindex, nofollow" : "index, follow" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: blog ? "article" : "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: entry.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: entry.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: entry.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: entry.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.querySelectorAll('script[data-mik-structured-data]').forEach((node) => node.remove());
    const schemas: Record<string, unknown>[] = [{
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SITE_NAME,
      alternateName: "Burger BAE Cafe",
      url: SITE_URL,
      image: DEFAULT_SOCIAL_IMAGE,
      telephone: ["+971549966937", "+971549966938"],
      servesCuisine: ["Indian", "Pakistani"],
      priceRange: "AED",
      address: { "@type": "PostalAddress", streetAddress: "Shop No. 5, The Metropolis Tower, Burj Khalifa Street", addressLocality: "Business Bay", addressRegion: "Dubai", addressCountry: "AE" },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "02:00" }],
      hasMenu: `${SITE_URL}/menu`,
      potentialAction: DELIVERY_LINKS.map((platform) => ({ "@type": "OrderAction", target: platform.href, name: `Order on ${platform.name}` })),
    }];
    if (blog || guide) schemas.push({ "@context": "https://schema.org", "@type": "Article", headline: blog?.title || guide?.title, description: blog?.excerpt || guide?.subtitle, image, ...(blog ? { datePublished: blog.date, dateModified: blog.date } : {}), mainEntityOfPage: canonical, author: { "@type": "Organization", name: SITE_NAME }, publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: DEFAULT_SOCIAL_IMAGE } } });
    if (blog && "faq" in blog && blog.faq) schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.mikStructuredData = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [pathname]);

  return null;
}

function Analytics() {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState(() => localStorage.getItem("mik-cookie-consent"));

  useEffect(() => {
    const update = () => setConsent(localStorage.getItem("mik-cookie-consent"));
    window.addEventListener("mik-consent-change", update);
    return () => window.removeEventListener("mik-consent-change", update);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || consent !== "accepted") return;
    if (!document.querySelector('script[data-mik-analytics]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.dataset.mikAnalytics = "true";
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true, send_page_view: false });
    }
    window.gtag?.("event", "page_view", { page_path: pathname, page_title: document.title });
  }, [pathname, consent]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      const href = anchor?.getAttribute("href") || "";
      if (href.startsWith("tel:")) trackEvent("phone_click", { destination: href });
      else if (href.includes("wa.me")) trackEvent("whatsapp_click", { destination: href });
      else if (href.includes("google.com/maps")) trackEvent("directions_click", { destination: href });
      else if (DELIVERY_LINKS.some((platform) => platform.href === href)) trackEvent("delivery_platform_click", { destination: href });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(() => localStorage.getItem("mik-cookie-consent"));
  if (choice) return null;

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem("mik-cookie-consent", value);
    setChoice(value);
    window.dispatchEvent(new Event("mik-consent-change"));
  };

  return (
    <aside aria-label="Cookie preferences" className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-2xl border-2 p-4 shadow-2xl" style={{ backgroundColor: "#ECEAE5", borderColor: "#1A0A00" }}>
      <p className="font-bold" style={{ color: "#1A0A00" }}>Your privacy choices</p>
      <p className="mt-1 text-sm" style={{ color: "#7A5C40" }}>
        We use optional analytics cookies to understand visits and improve ordering journeys. Essential site features work without them. <Link to="/privacy" className="underline">Privacy policy</Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button onClick={() => choose("accepted")} className="min-h-11 px-5 font-bold" style={{ backgroundColor: "#FF5C00", border: "2px solid #1A0A00" }}>Accept analytics</button>
        <button onClick={() => choose("declined")} className="min-h-11 px-5 font-bold" style={{ backgroundColor: "white", border: "2px solid #1A0A00" }}>Decline</button>
      </div>
    </aside>
  );
}

const HERO_PAGE_PREFIXES = ["/menu", "/gallery", "/blog", "/tourist-guide", "/our-story", "/contact"];

function pageHasHero(pathname: string) {
  if (pathname === "/") return true;
  return HERO_PAGE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const hasHero = pageHasHero(location.pathname);
  const transparent = hasHero && !scrolled;

  useEffect(() => {
    if (!hasHero) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/our-story", label: "Our Story" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/tourist-guide", label: "Visitor Guides" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: transparent ? "transparent" : "#1A0A00",
        backgroundImage: transparent ? "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.35))" : "none",
        boxShadow: transparent ? "none" : "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Mayur International Kitchen Dubai logo" className="w-12 h-12 object-contain" />
          <div>
            <div className="text-sm font-bold leading-tight" style={{ color: "#C9A227", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
              Mayur International
            </div>
            <div className="text-xs text-white/60 leading-tight">Kitchen Dubai</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }: { isActive: boolean }) =>
                `px-4 py-2 tracking-[0.08em] transition-colors ${isActive ? "text-[#C9A227]" : "text-white/80 hover:text-white"}`
              }
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.08em", fontWeight: 400 }}
            >
              {l.label}
            </NavLink>
          ))}
          <span className="ml-3">
            <NeonButton href="tel:+971549966937" small>Call Now</NeonButton>
          </span>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "#ffffff20", backgroundColor: "#1A0A00" }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `block px-5 py-3 border-b tracking-[0.15em] ${isActive ? "text-[#C9A227]" : "text-white/80"}`
              }
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.08em", borderColor: "#ffffff15" } as React.CSSProperties}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="tel:+971549966937" className="block px-5 py-3 text-sm font-semibold" style={{ color: "#C9A227" }}>
            Call: 054 996 6937
          </a>
        </div>
      )}
    </nav>
  );
}

function NavSpacer() {
  const { pathname } = useLocation();
  if (pageHasHero(pathname)) return null;
  return <div style={{ height: "64px" }} />;
}

function NeonButton({
  to,
  href,
  target,
  rel,
  children,
  icon: Icon,
  small = false,
  fullWidth = false,
  secondary = false,
}: {
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number }>;
  small?: boolean;
  fullWidth?: boolean;
  secondary?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const style: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: small ? "0.95rem" : "1.1rem",
    backgroundColor: secondary ? (hover ? "#FF5C00" : "rgba(26, 10, 0, 0.88)") : "#FF5C00",
    color: secondary && !hover ? "#FFFFFF" : "#1A0A00",
    boxShadow: hover ? "6px 6px 0px #1A0A00" : "4px 4px 0px #1A0A00",
    border: `2px solid ${secondary ? "#FF5C00" : "#1A0A00"}`,
    letterSpacing: "0.12em",
    transform: hover ? "translate(-2px, -2px)" : "translate(0, 0)",
  };
  const className = `px-6 py-3 font-bold uppercase tracking-widest transition-all duration-150 inline-flex items-center gap-2 justify-center ${fullWidth ? "w-full" : ""}`;
  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
    </>
  );
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style,
    className,
  };
  if (to) return <Link to={to} {...handlers}>{content}</Link>;
  return <a href={href} target={target} rel={rel} {...handlers}>{content}</a>;
}

function DeliveryLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-wrap gap-2" : "grid gap-3 sm:grid-cols-2"}>
      {DELIVERY_LINKS.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className={compact
            ? "inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold transition hover:border-[#C9600A] hover:text-[#C9600A]"
            : "group flex min-h-20 items-center gap-4 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C9600A]/40 hover:shadow-md"}
          aria-label={`Open ${platform.name} — ${platform.note}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8EBC5] text-[#9A7000]">
            <ShoppingBag size={20} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-[#1A0A00]">{platform.name}</span>
            {!compact && <span className="block text-xs text-[#7A5C40]">{platform.note}</span>}
          </span>
          <ExternalLink size={16} className="shrink-0 text-[#C9600A]" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function BrandStoryGrid() {
  return (
    <section className="overflow-hidden py-20" style={{ backgroundColor: "#F7F3EC" }}>
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#C9600A]">The MIKd philosophy</p>
          <h2 className="text-3xl font-bold text-[#1A0A00] md:text-5xl" style={{ fontFamily: "'Biryani', sans-serif" }}>Tradition, Care & a Taste of Dubai</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#7A5C40]">Six illustrations, one promise: thoughtful food rooted in India and made for modern Dubai.</p>
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
          {BRAND_PANELS.map((panel) => (
            <figure key={panel.src} className="w-[82vw] max-w-[444px] shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10 md:w-auto md:max-w-none">
              <img src={panel.src} alt={panel.alt} className="h-auto w-full" loading="lazy" />
            </figure>
          ))}
        </div>
        <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#9A8067] md:hidden">Swipe to explore →</p>
      </div>
    </section>
  );
}

function Footer() {
  const [newsletterJoined, setNewsletterJoined] = useState(false);

  return (
    <footer className="border-t-2 border-[#1A0A00] bg-[#F7F3EC] text-[#1A0A00]">
      <section aria-labelledby="newsletter-title" className="border-b border-[#1A0A00]/20">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-12 md:px-12 lg:grid-cols-[1fr_1.1fr] lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FF5C00]">The MIKd letter</p>
            <h2 id="newsletter-title" className="mt-3 text-4xl uppercase leading-none md:text-5xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.035em" }}>
              Good food. Nice surprises. No spam.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#7A5C40]">Occasional birthday and anniversary treats, menu news and members-only gifts—sent simply to your inbox.</p>
          </div>

          {newsletterJoined ? (
            <p className="border-l-4 border-[#FF5C00] py-4 pl-5 text-xl font-bold" role="status">You are on the list. Thank you.</p>
          ) : (
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setNewsletterJoined(true); }}>
              <label className="min-w-0 flex-1">
                <span className="sr-only">Email address</span>
                <input required type="email" autoComplete="email" placeholder="Your email address" className="h-14 w-full border-2 border-[#1A0A00] bg-transparent px-5 text-sm outline-none placeholder:text-[#7A5C40]/70 focus:border-[#FF5C00]" />
              </label>
              <button type="submit" className="h-14 shrink-0 border-2 border-[#1A0A00] bg-[#FF5C00] px-8 text-lg uppercase tracking-[0.1em] text-[#1A0A00] transition-colors hover:bg-[#1A0A00] hover:text-[#F7F3EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5C00]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Subscribe</button>
            </form>
          )}
          <p className="text-[0.68rem] leading-5 text-[#7A5C40] lg:col-start-2">By subscribing, you agree to occasional MIKd emails. Unsubscribe anytime. <Link to="/privacy" className="underline underline-offset-4 hover:text-[#FF5C00]">Privacy policy</Link>.</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.8fr_1fr]">
          <div>
            <img src={logoImg} alt="Mayur International Kitchen Dubai" className="h-20 w-20 object-contain" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#7A5C40]">Authentic Indian food from Chef Mayur, served daily in the heart of Business Bay, Dubai.</p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-7 text-sm font-semibold">
            {[["/menu", "Menu"], ["/our-story", "Our Story"], ["/offers", "Offers"], ["/gallery", "Gallery"], ["/blog", "Blog"], ["/contact", "Contact"]].map(([to, label]) => (
              <Link key={to} to={to} className="min-h-11 py-3 transition-colors hover:text-[#FF5C00]">{label}</Link>
            ))}
          </nav>

          <address className="not-italic text-sm leading-7 text-[#7A5C40]">
            <p className="font-bold uppercase tracking-[0.15em] text-[#FF5C00]">Open daily · 10 AM — 2 AM</p>
            <p className="mt-3">Shop No. 5, The Metropolis Tower,<br />Burj Khalifa Street, Business Bay, Dubai</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <NeonButton href="tel:+971549966937" icon={Phone} small>Call</NeonButton>
              <NeonButton href="https://wa.me/971568701737" target="_blank" rel="noopener noreferrer" icon={MessageCircle} small>WhatsApp</NeonButton>
              <NeonButton href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" icon={MapPin} small>Directions</NeonButton>
            </div>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#1A0A00]/20 pt-6 text-xs text-[#7A5C40] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mayur International Kitchen Dubai. All rights reserved.</p>
          <Link to="/privacy" className="min-h-11 py-3 hover:text-[#FF5C00]">Privacy & cookies</Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Hero Carousel ────────────────────────────────────────────────────────────

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (paused || reducedMotion) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, reducedMotion]);

  const prev = () => { setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % SLIDES.length); resetTimer(); };

  return (
    <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
      {SLIDES.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <img
            src={s.img}
            alt={`${s.h1} — Mayur International Kitchen Dubai Business Bay`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      ))}

      {SLIDES.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className="absolute bottom-20 left-0 px-6 md:px-16 max-w-4xl transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          <>
            <div
              className="inline-block text-xs font-bold uppercase tracking-[0.24em] mb-3"
              style={{ color: "#FF5C00", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              Mayur International Kitchen Dubai
            </div>
            {i === current ? (
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Biryani', sans-serif" }}>{s.h1}</h1>
            ) : (
              <p aria-hidden="true" className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Biryani', sans-serif" }}>{s.h1}</p>
            )}
            <p className="text-white/85 text-lg md:text-xl mb-7 max-w-2xl">{s.h2}</p>
          </>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to={s.ctaLink}
              className="px-7 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-150"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                backgroundColor: "#FF5C00",
                color: "#1A0A00",
                boxShadow: "4px 4px 0px #1A0A00",
                border: "2px solid #1A0A00",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px #1A0A00";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #1A0A00";
              }}
            >
              {s.cta}
            </Link>
            <a
              href="https://wa.me/971568701737?text=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20reserve%20a%20table%20for%20%5BNumber%20of%20People%5D%20people."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded font-semibold text-sm border border-white/30 text-white backdrop-blur-sm"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors md:block" aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors md:block" aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      <button
        onClick={() => setPaused((value) => !value)}
        className="absolute right-4 bottom-5 z-20 bg-black/55 hover:bg-black/75 text-white rounded-full p-2 transition-colors"
        aria-label={paused ? "Play carousel" : "Pause carousel"}
        aria-pressed={paused}
      >
        {paused ? <Play size={18} /> : <Pause size={18} />}
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className="w-2 h-2 rounded-full transition-all"
            style={{ backgroundColor: i === current ? "#FF5C00" : "rgba(255,255,255,0.4)" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Content Renderer ─────────────────────────────────────────────────────────

type Block = { type: string; text: string };

function RenderContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        const text = normalizeMenuPrices(b.text);
        const avoidBreak = { breakInside: "avoid" as const };
        if (b.type === "h1") return <h2 key={i} className="text-3xl font-bold mt-8 mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00", ...avoidBreak }}>{text}</h2>;
        if (b.type === "h2") return <h2 key={i} className="text-2xl font-bold mt-8 mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#C9600A", ...avoidBreak }}>{text}</h2>;
        if (b.type === "h3") return <h3 key={i} className="text-xl font-bold mt-5 mb-1" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00", ...avoidBreak }}>{text}</h3>;
        if (b.type === "li") return <li key={i} className="ml-5 text-[#7A5C40] list-disc leading-relaxed" style={avoidBreak}>{text}</li>;
        return <p key={i} className="text-[#7A5C40] leading-relaxed" style={avoidBreak}>{text}</p>;
      })}
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <main>
      <HeroCarousel />

      {/* Trust Bar */}
      <section className="overflow-hidden py-5 -mt-3 relative z-10" style={{ backgroundColor: "#1A0A00" }}>
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 28s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
        <div className="marquee-track" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          {[...Array(2)].map((_, gi) => (
            <div key={gi} className="flex items-center">
              {["100% Halal Certified", "15 Branches Worldwide", "15 Years of Excellence", "Order Online", "5-Star Hotel Trained Chef"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-white text-3xl tracking-widest px-6 whitespace-nowrap">{item}</span>
                  <span aria-hidden="true" className="mx-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5C00]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>
          Our Most-Loved Dishes
        </h2>
        <p className="text-center text-[#7A5C40] mb-12 max-w-xl mx-auto">
          From slow-cooked Dum Biryani to charcoal-grilled whole chicken — every dish is made fresh, every single day.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.slice(0, 3).map((dish) => {
            const badgeColor: Record<string, { bg: string; color: string }> = {
              "Best Seller":     { bg: "#FF5C00", color: "#1A0A00" },
              "Fan Favourite":   { bg: "#1A0A00", color: "#C9A227" },
              "Chef's Special":  { bg: "#C9600A", color: "#fff" },
              "Street Favourite":{ bg: "#1A0A00", color: "#fff" },
              "Must Try":        { bg: "#FF5C00", color: "#1A0A00" },
            };
            const badge = badgeColor[dish.badge] ?? { bg: "#FF5C00", color: "#1A0A00" };
            return (
              <div key={dish.name} className="bg-white overflow-hidden" style={{ border: "1.5px solid #1A0A00" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={dish.img}
                    alt={`${dish.name} at Mayur International Kitchen Dubai Business Bay`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1"
                    style={{ backgroundColor: badge.bg, color: badge.color, fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em" }}
                  >
                    {dish.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-bold text-base leading-tight" style={{ color: "#0f0f0f", fontFamily: "'DM Sans', sans-serif" }}>{dish.name}</h3>
                    <span className="shrink-0 font-bold italic" style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1.35rem", color: "#C9600A" }}>AED {menuPrice(dish.name) || dish.price.replace("AED ", "")}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#6b6b6b" }}>{dish.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <NeonButton to="/menu">Browse Full Menu — 100+ Dishes</NeonButton>
        </div>
      </section>

      {/* Story Snippet */}
      <section className="grid border-4 border-[#1A0A00] md:grid-cols-[45%_55%]" style={{ minHeight: "420px" }}>
        {/* Left — coloured panel */}
        <div className="flex flex-col justify-center px-10 py-16" style={{ backgroundColor: "#C9600A" }}>
          <h2
            className="text-white font-bold uppercase leading-none mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 5vw, 4.2rem)", letterSpacing: "0.02em" }}
          >
            15 Years.<br />15 Branches.<br />One Passion.
          </h2>
          <div className="mb-6 h-1 w-24 bg-[#1A0A00]" aria-hidden="true" />
          <p className="text-white/85 leading-relaxed mb-8 max-w-sm" style={{ fontSize: "0.95rem" }}>
            Chef Mayur's journey began in his mother's kitchen at age 6. After training at the Taj, Oberoi, Marriott, and Westin, he opened his first restaurant near Taipei 101 in 2011. Dubai is the first step of a global vision.
          </p>
          <div>
            <NeonButton to="/our-story" small>Our Story</NeonButton>
          </div>
        </div>
        {/* Right — flush photo */}
        <div className="relative min-h-[300px] border-t-4 border-[#1A0A00] md:border-l-4 md:border-t-0">
          <img
            src={storyKarahiParotta}
            alt="Chicken karahi with flaky parotta at Mayur International Kitchen Dubai"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1300px] items-center gap-10 px-5 py-20 md:grid-cols-[minmax(280px,460px)_1fr] md:px-10">
        <img src={brandCraftedWithCare} alt="Crafted with care and served with pride at Mayur Indian Kitchen Dubai" className="mx-auto w-full max-w-[460px] rounded-2xl shadow-lg ring-1 ring-black/10" loading="lazy" />
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#C9600A]">Made with intention</p>
          <h2 className="text-4xl font-bold leading-tight text-[#1A0A00] md:text-6xl" style={{ fontFamily: "'Biryani', sans-serif" }}>Crafted With Care.<br /><span className="text-[#2F6F63]">Served With Pride.</span></h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#7A5C40]">From the first spice hitting the pan to the final plate leaving our kitchen, every detail matters.</p>
          <div className="mt-7"><NeonButton to="/our-story" small>Discover Our Story</NeonButton></div>
        </div>
      </section>

      {/* Why MIK */}
      <section className="py-20 px-4 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>
          Why Choose Mayur International Kitchen?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "100% Halal Certified", desc: "Every ingredient and preparation meets strict halal standards. No exceptions." },
            { icon: ChefHat, title: "5-Star Pedigree", desc: "Chef Mayur trained at Taj, Oberoi, Marriott, and Westin hotels before opening MIK." },
            { icon: Bike, title: "Order Online", desc: "Order from your home, office, or hotel in Business Bay and Downtown Dubai." },
            { icon: UtensilsCrossed, title: "100+ Menu Items", desc: "From street-style samosas to full family grill platters — a cuisine for every mood." },
          ].map((p) => (
            <div key={p.title} className="group bg-white rounded-2xl p-7 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-14 h-14 mb-5 mx-auto flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105" style={{ background: "linear-gradient(145deg, #FFF7D6, #F4E5A4)", color: "#9A7000" }}>
                <p.icon size={27} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>{p.title}</h3>
              <p className="text-sm text-[#7A5C40]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl px-6 py-8 md:grid-cols-[300px_1fr] md:px-8" style={{ backgroundColor: "#F2EBE0" }}>
          <img src={brandClickAway} alt="Order Mayur Indian Kitchen Dubai online — great food just a click away" className="mx-auto w-full max-w-[300px] rounded-2xl shadow-md ring-1 ring-black/10" loading="lazy" />
          <div>
            <div className="mb-7">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#C9600A]">Delivery partners</div>
              <h2 className="text-3xl font-bold text-[#1E0F00]" style={{ fontFamily: "'Biryani', sans-serif" }}>Order Mayur Kitchen Online</h2>
              <p className="mt-2 max-w-2xl text-sm text-[#7A5C40]">Some delivery apps still show our former name, Burger BAE Cafe. The Metropolis Tower location and phone number identify the same restaurant.</p>
            </div>
            <DeliveryLinks />
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-20 px-4 max-w-[1600px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="uppercase mb-3" style={{ fontFamily: "'Anton', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#C9A227" }}>Location</div>
          <h2 className="mb-4" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "#1E0F00", lineHeight: 1, letterSpacing: "0.01em" }}>
            Minutes from Burj Khalifa
          </h2>
          <div className="flex gap-3 mb-3">
            <MapPin size={18} style={{ color: "#C9600A" }} className="shrink-0 mt-0.5" />
            <p className="text-[#7A5C40]">Shop No. 5, The Metropolis Tower, Burj Khalifa Street Near Downtown, Business Bay, Dubai, UAE</p>
          </div>
          <div className="flex gap-3 mb-3">
            <Phone size={18} style={{ color: "#C9600A" }} className="shrink-0" />
            <div>
              <a href="tel:+971549966937" className="block font-semibold hover:underline" style={{ color: "#C9600A" }}>054 996 6937</a>
              <a href="tel:+971549966938" className="block font-semibold hover:underline" style={{ color: "#C9600A" }}>054 996 6938</a>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <Clock size={18} style={{ color: "#C9600A" }} className="shrink-0 mt-0.5" />
            <p className="text-[#7A5C40]">Open Daily — 10:00 AM to 2:00 AM</p>
          </div>
          <div className="flex gap-3">
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20reserve%20a%20table%20for%20%5BNumber%20of%20People%5D%20people." target="_blank" rel="noopener noreferrer" icon={MessageCircle} small>WhatsApp Order</NeonButton>
            <NeonButton href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" small secondary>Get Directions</NeonButton>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg h-80">
          <iframe
            title="Mayur International Kitchen Dubai map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.18!2d55.2629!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690a392a8037%3A0x1a81e4ec6d2e2228!2sMayur%20International%20kitchen%20Dubai!5e0!3m2!1sen!2sae!4v1720000000000!5m2!1sen!2sae"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F2EBE0" }}>
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>
            From Our Blog
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {BLOGS.slice(0, 3).map((b) => (
              <Link key={b.slug} to={`/blog/${b.slug}`} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow">
                <img src={b.img} alt={b.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="text-xs text-[#7A5C40] mb-1">{b.date}</p>
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>{b.title}</h3>
                  <p className="text-xs text-[#7A5C40] line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <NeonButton to="/blog">Read All Articles</NeonButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState("biryani");
  // activeTab default matches first MENU_CATEGORIES id
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search.trim()) return;
    const timer = window.setTimeout(() => trackEvent("menu_search", { search_term: search.trim() }), 700);
    return () => window.clearTimeout(timer);
  }, [search]);

  const allItems = MENU_CATEGORIES.flatMap((c) => c.items.map((i) => ({ ...i, category: c.label })));
  const displayItems = search.trim()
    ? allItems.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
    : (MENU_CATEGORIES.find((c) => c.id === activeTab)?.items ?? []);

  return (
    <main className="min-h-screen">
      <section className="page-video-hero relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
        <video
          className="page-video-media absolute inset-0 w-full h-full object-cover"
          src={menuHeroVideo}
          poster={menuHeroPoster}
          aria-label="Aerial drone footage of the Dubai Marina skyline and waterfront near Mayur International Kitchen Dubai in Business Bay"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <span className="sr-only">
            A slow aerial shot of Dubai Marina's skyscrapers and waterfront, setting the scene for Mayur International Kitchen Dubai's Business Bay location.
          </span>
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,0,0.94) 0%, rgba(26,10,0,0.6) 48%, rgba(26,10,0,0.16) 100%)" }} />

        <div className="page-video-content relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="page-video-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5C00] [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Mayur International Kitchen Dubai</div>
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Our Full Menu
          </h1>
          <h2 className="text-white/80 max-w-xl mx-auto mb-8 font-normal" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            100+ dishes across Indian, Pakistani, and International cuisines — all prices in AED, 100% Halal.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Order via WhatsApp</NeonButton>
            <NeonButton href="tel:+971549966937" icon={Phone} secondary>Call Now</NeonButton>
          </div>
        </div>
      </section>

      <section className="border-b bg-white" style={{ borderColor: "rgba(26,10,0,0.12)" }} aria-label="Search and filter the menu">
        <div className="mx-auto max-w-[1600px] px-5 py-8 md:px-12 md:py-12">
          <div className="relative max-w-5xl border-b-[5px] border-dotted border-[#FF5C00] pb-3 md:pb-4">
            <input
              type="search"
              aria-label="Search menu dishes"
              placeholder="TYPE WHAT YOU ARE LOOKING FOR"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent pr-14 uppercase text-[#1A0A00] outline-none placeholder:text-[#1A0A00]/20 md:pr-20"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.65rem, 4vw, 3rem)", letterSpacing: "0.035em" }}
            />
            <Search aria-hidden="true" className="absolute bottom-3 right-1 text-[#FF5C00] md:bottom-4" size={42} strokeWidth={2.4} />
          </div>

          <div className="relative mt-10 overflow-hidden md:mt-14">
            <div className="flex items-center gap-7 overflow-x-auto pb-4 pr-16 md:gap-12" aria-label="Menu categories">
              {MENU_CATEGORIES.map((c) => {
                const active = activeTab === c.id && !search;
                return (
                  <button
                    key={c.id}
                    onClick={() => { setActiveTab(c.id); setSearch(""); }}
                    aria-pressed={active}
                    className="group flex shrink-0 items-center gap-3 whitespace-nowrap border-b-[5px] pb-2 uppercase transition-colors"
                    style={{
                      borderBottomColor: active ? "#FF5C00" : "transparent",
                      borderBottomStyle: active ? "dotted" : "solid",
                      color: active ? "#FF5C00" : "#1A0A00",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
                      letterSpacing: "0.025em",
                    }}
                  >
                    <span>{c.label}</span>
                    {active && (
                      <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-[#FF5C00] px-2 text-base text-[#1A0A00] md:h-11 md:min-w-11 md:text-lg">
                        {c.items.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/90 to-transparent" />
          </div>
          <p className="mt-1 text-right text-[11px] uppercase tracking-[0.16em] text-[#7A5C40] md:hidden">Swipe for more categories</p>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-5 py-12 md:px-12 md:py-16">
        {!search && (
          <div className="mb-9 flex items-center gap-4 border-b-2 border-[#1A0A00] pb-4 md:mb-12">
            <h2 className="uppercase leading-none text-[#1A0A00]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.6rem, 5vw, 4.5rem)", letterSpacing: "0.02em" }}>
              {MENU_CATEGORIES.find((c) => c.id === activeTab)?.label}
            </h2>
            <span className="flex h-11 min-w-11 items-center justify-center rounded-full bg-[#FF5C00] px-2 font-bold text-[#1A0A00] md:h-14 md:min-w-14 md:text-lg">
              {displayItems.length}
            </span>
            <span aria-hidden="true" className="ml-auto hidden text-xs font-bold uppercase tracking-[0.24em] text-[#7A5C40] sm:block">Current category</span>
          </div>
        )}
        {search && (
          <div className="mb-9 flex items-end justify-between gap-4 border-b-2 border-[#1A0A00] pb-4 md:mb-12">
            <p className="uppercase leading-none text-[#1A0A00]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.1rem, 4vw, 3.6rem)" }}>
              Search results
            </p>
            <p className="text-sm text-[#7A5C40]">{displayItems.length} found for &ldquo;{search}&rdquo;</p>
          </div>
        )}
        <div className="grid gap-x-9 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
          {displayItems.map((item, idx) => (
            <article key={`${item.name}-${idx}`} className="group flex min-h-20 items-center gap-3 border-b-2 border-dotted border-[#FF5C00]/40 px-1 py-4 transition-colors hover:bg-[#FFF6EF] md:min-h-24 md:px-3">
              <h3 className="max-w-[62%] uppercase leading-tight text-[#1A0A00] transition-colors group-hover:text-[#FF5C00]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.2rem, 2vw, 1.55rem)", letterSpacing: "0.025em" }}>{item.name}</h3>
              <span aria-hidden="true" className="min-w-5 flex-1 border-t-2 border-dotted border-[#1A0A00]/20" />
              <p className="shrink-0 whitespace-nowrap leading-none text-[#FF5C00]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="mr-1 text-xs tracking-[0.12em] text-[#7A5C40]">AED</span>
                <span className="text-2xl md:text-[1.7rem]">{item.price}</span>
              </p>
            </article>
          ))}
        </div>
        {displayItems.length === 0 && <p className="text-center text-[#7A5C40] py-12">No dishes found.</p>}

        <div className="mt-12 p-6 rounded-xl text-center" style={{ backgroundColor: "#F2EBE0" }}>
          <p className="text-[#7A5C40] mb-3">Want to order or have a special request?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <NeonButton href="tel:+971549966937" small secondary>Call: 054 996 6937</NeonButton>
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20reserve%20a%20table%20for%20%5BNumber%20of%20People%5D%20people." target="_blank" rel="noopener noreferrer" small>WhatsApp Order</NeonButton>
          </div>
        </div>
      </div>
    </main>
  );
}

const FOOD_CARDS = [
  { img: tandooriImg,   name: "Tandoori Chicken Leg" },
  { img: chaiImg,       name: "Karak Chai" },
  { img: parottaImg,    name: "Poratta Shawarma", cropEdge: true },
  { img: samosaImg,     name: "Samosa" },
  { img: cheeseNaanImg, name: "Cheese Naan" },
];

function FoodCarousel() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const n = FOOD_CARDS.length;

  const next = () => setActive(a => (a + 1) % n);
  const prev = () => setActive(a => (a - 1 + n) % n);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] w-screen flex-col justify-center overflow-hidden py-16 select-none"
      style={{ marginLeft: "calc(50% - 50vw)", backgroundColor: "transparent" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Cards row with gaps */}
      <div className="relative flex w-full items-center justify-center gap-3 px-2 md:gap-6 md:px-4">
        {FOOD_CARDS.map((card, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          const isCenter = abs === 0;
          const isEdge = abs === 2;

          return (
            <div
              key={i}
              onClick={() => !isCenter && setActive(i)}
              className="transition-all duration-500 ease-in-out shrink-0"
              style={{
                width: isCenter ? "clamp(210px, 24vw, 440px)" : isEdge ? "clamp(105px, 14vw, 250px)" : "clamp(150px, 19vw, 340px)",
                height: isCenter ? "clamp(305px, 35vw, 638px)" : isEdge ? "clamp(152px, 20vw, 360px)" : "clamp(218px, 28vw, 493px)",
                opacity: isCenter ? 1 : isEdge ? 0.4 : 0.55,
                cursor: isCenter ? "default" : "pointer",
                order: offset + 3,
              }}
            >
              <div
                className="w-full h-full overflow-hidden shadow-xl"
                style={{ borderRadius: "16px" }}
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={(card as any).cropEdge ? { transform: "scale(1.06)" } : undefined}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrow + label */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <button
          onClick={next}
          aria-label="Next dish"
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
          style={{ border: "2px solid #1A0A00", backgroundColor: "#fff" }}
        >
          <ChevronRight size={20} color="#1A0A00" />
        </button>
        <Link to="/menu" className="text-sm tracking-wide" style={{ color: "#1A0A00" }}>
          Know Our <span style={{ color: "#C9600A", fontWeight: 700 }}>Menu</span>
        </Link>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {FOOD_CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? "20px" : "8px",
              height: "8px",
              backgroundColor: i === active ? "#C9600A" : "#C4B49A",
            }}
            aria-label={`Go to ${FOOD_CARDS[i].name}`}
          />
        ))}
      </div>
    </section>
  );
}

function OurStoryPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ECEAE5" }}>
      {/* Split Hero */}
      <div className="flex flex-col md:flex-row md:h-[70vh] md:min-h-[500px] md:max-h-[820px]">
        {/* Left panel — 40% cream */}
        <div
          className="relative flex w-full md:w-[40%] flex-col justify-center px-10 py-28 md:px-16 md:py-0"
          style={{ backgroundColor: "#ECEAE5" }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "#1A0A00", width: "4px" }}
          />
          <div
            className="uppercase mb-5"
            style={{ color: "#FF5C00", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.35em" }}
          >
            Since 2011
          </div>
          <h1
            className="font-bold leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 7vw, 7rem)",
              color: "#1A0A00",
              letterSpacing: "0.02em",
            }}
          >
            <span className="block">Our</span>
            <span className="block" style={{ color: "#FF5C00" }}>Story</span>
          </h1>
          <p
            className="leading-relaxed max-w-xs"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)", color: "rgba(26,10,0,0.65)" }}
          >
            15 years. 15 branches. One unwavering passion for authentic Indian cuisine — from Taipei to Dubai.
          </p>
          <div className="mt-8 h-0.5 w-16" style={{ backgroundColor: "#C9600A" }} />
        </div>

        {/* Right panel — 60% image */}
        <div className="relative min-h-[360px] w-full overflow-hidden md:min-h-0 md:w-[60%]">
          <img
            src={storyHeroImg}
            alt="Mayur International Kitchen — Our Story"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ECEAE5 0%, transparent 100%)" }}
          />
        </div>
      </div>

      <div className="h-[6px] w-full" style={{ backgroundColor: "#1A0A00" }} />
      <FoodCarousel />
      <BrandStoryGrid />

      {/* Editorial Spread */}
      <div style={{ backgroundColor: "#ECEAE5" }}>
        {/* Top rule */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16">
          <div className="h-[3px] w-full" style={{ backgroundColor: "#1A0A00" }} />
          <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: "#1A0A00" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em", color: "#1A0A00" }}>
              MAYUR INTERNATIONAL KITCHEN — DUBAI
            </span>
            <span style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.72rem", color: "#7A5C40", fontStyle: "italic" }}>
              Est. 2011 · Business Bay, UAE
            </span>
          </div>
        </div>

        {/* Two-column newspaper spread */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row gap-0">

            {/* LEFT — chef portrait 50% */}
            <div className="md:w-1/2 pr-0 md:pr-10 border-r-0 md:border-r" style={{ borderColor: "#1A0A00" }}>
              {/* section label */}
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#C9600A" }} className="mb-3">
                THE FOUNDER
              </p>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={chefPortrait}
                  alt="Chef Mayur Srivastava — Founder, Mayur International Kitchen"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "contrast(1.08)", mixBlendMode: "multiply" }}
                />
              </div>
              {/* Caption bar */}
              <div className="mt-3 flex items-start justify-between gap-4">
                <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.78rem", color: "#7A5C40", fontStyle: "italic", lineHeight: 1.5 }}>
                  Chef Mayur Srivastava trained at the Taj, Oberoi, Marriott &amp; Westin before opening his first kitchen in Taipei, 2011.
                </p>
                <div className="shrink-0 h-px w-8 mt-3" style={{ backgroundColor: "#C9A227" }} />
              </div>

              {/* Second image */}
              <div className="mt-6 relative w-full overflow-hidden">
                <img
                  src={chefGroup}
                  alt="Chef Mayur with distinguished guests"
                  className="w-full object-cover"
                  style={{ mixBlendMode: "multiply", filter: "contrast(1.08)" }}
                />
              </div>
              <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.78rem", color: "#7A5C40", fontStyle: "italic", lineHeight: 1.5 }} className="mt-2">
                Chef Mayur with distinguished guests — a testament to MIK's reach beyond the plate.
              </p>

              {/* Pull quote — bottom of left col */}
              <div className="mt-10 pt-8 border-t-2" style={{ borderColor: "#1A0A00" }}>
                <p
                  className="italic leading-snug"
                  style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(1.5rem, 2.2vw, 2rem)", color: "#1A0A00" }}
                >
                  "Taste the Tradition,<br />Feel the Authenticity."
                </p>
                <p className="mt-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.8rem", letterSpacing: "0.2em", color: "#C9600A" }}>
                  — CHEF MAYUR SRIVASTAVA, FOUNDER
                </p>
              </div>
            </div>

            {/* RIGHT — story text 50% */}
            <div className="md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0">

              {/* Big editorial headline */}
              <h2
                className="font-bold leading-none mb-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
                  color: "#1A0A00",
                  letterSpacing: "0.02em",
                  lineHeight: 0.92,
                }}
              >
                The Story<br />
                Behind<br />
                <span style={{ color: "#C9600A" }}>MIKd1</span>
              </h2>

              <div className="h-px mb-6" style={{ backgroundColor: "#C9A227" }} />

              <div className="space-y-5">
                <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1.05rem", color: "#2A1A08", lineHeight: 1.9 }}>
                  Every great restaurant begins with a memory — a flavour, a moment, a feeling. For Chef Mayur Srivastava, it began at age 6 in his mother's kitchen in India, watching her transform simple ingredients into extraordinary meals.
                </p>

                <h3
                  className="font-bold pt-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#1A0A00", letterSpacing: "0.06em", borderTop: "1px solid #1A0A00", paddingTop: "0.75rem" }}
                >
                  From Mother's Kitchen to Five-Star Hotels
                </h3>
                <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1rem", color: "#4A3520", lineHeight: 1.85 }}>
                  That early passion led Chef Mayur to formal culinary training at one of India's premier Hotel Management institutes — followed by the kitchens of the Taj, Oberoi, Marriott, and Westin hotels. He mastered not just recipes, but the philosophy of great hospitality.
                </p>

                <h3
                  className="font-bold pt-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#1A0A00", letterSpacing: "0.06em", borderTop: "1px solid #1A0A00", paddingTop: "0.75rem" }}
                >
                  Taipei, 2011 — A Restaurant is Born
                </h3>
                <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1rem", color: "#4A3520", lineHeight: 1.85 }}>
                  In 2011, Chef Mayur opened his first Mayur Kitchen near Taipei 101. The restaurant filled every night. The biryani — slow-cooked Dum-style with aged Basmati rice — became a legend in the city.
                </p>

                <h3
                  className="font-bold pt-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#1A0A00", letterSpacing: "0.06em", borderTop: "1px solid #1A0A00", paddingTop: "0.75rem" }}
                >
                  15 Branches — and Now, Dubai
                </h3>
                <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1rem", color: "#4A3520", lineHeight: 1.85 }}>
                  The Mayur brand grew to 15 restaurants and 5 grocery stores across Taiwan. In 2025, MIKd1 opened at The Metropolis Tower, Burj Khalifa Street, Business Bay. The same recipes. The same standards. The same soul.
                </p>
              </div>

              {/* Four pillars — compact newspaper grid */}
              <div className="mt-10 pt-6 border-t-2" style={{ borderColor: "#1A0A00" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#C9600A" }} className="mb-4">
                  OUR FOUR PILLARS
                </p>
                <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "#1A0A00" }}>
                  {[
                    { title: "Fresh Ingredients", desc: "No frozen shortcuts. Made daily from quality-sourced produce." },
                    { title: "Authentic Flavours", desc: "Original recipes, hand-ground spices, real technique." },
                    { title: "Impeccable Hygiene", desc: "Five-star hotel standards in every corner of our kitchen." },
                    { title: "Guest Satisfaction", desc: "Every guest treated like a guest at the Taj. No exceptions." },
                  ].map((p) => (
                    <div key={p.title} className="p-4" style={{ backgroundColor: "#ECEAE5" }}>
                      <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#1A0A00", letterSpacing: "0.05em" }} className="mb-1">
                        {p.title}
                      </h4>
                      <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.8rem", color: "#7A5C40", lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archival-style garden film fills the editorial column below the pillars */}
              <figure className="mt-8 border-2 border-[#1A0A00] bg-[#1A0A00] p-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1A0A00]">
                  <video
                    className="h-full w-full object-cover"
                    src={storyVintageMarigolds}
                    poster={storyVintageMarigoldsPoster}
                    aria-label="Vintage-style close-up film of orange marigold flowers"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    A warm, vintage-style close-up of orange marigold flowers moving gently in the garden.
                  </video>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent 0, transparent 19%, rgba(255,238,190,.22) 19.15%, transparent 19.4%), linear-gradient(180deg, rgba(255,210,120,.2), transparent 35%, rgba(35,10,0,.28))",
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 bg-[#1A0A00] px-3 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#FF5C00]"
                    style={{ fontFamily: "'Biryani', sans-serif" }}
                  >
                    From the garden
                  </span>
                </div>
                <figcaption className="flex items-center justify-between gap-4 bg-[#ECEAE5] px-3 py-3">
                  <p className="text-[0.7rem] leading-relaxed text-[#4A3520]" style={{ fontFamily: "'Biryani', sans-serif" }}>
                    Marigold — a colour of celebration, welcome and new beginnings.
                  </p>
                  <span className="shrink-0 text-[0.6rem] uppercase tracking-[0.16em] text-[#7A5C40]" style={{ fontFamily: "'Biryani', sans-serif" }}>
                    Film 01
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16">
          <div className="h-[3px] w-full" style={{ backgroundColor: "#1A0A00" }} />

          {/* Recipe book feature */}
          <div className="mt-16 flex flex-col md:flex-row gap-10 items-center">
            {/* Image — left, slightly oversized for drama */}
            <div className="md:w-3/5 shrink-0">
              <img
                src={recipeBook}
                alt="Mayur Kitchen recipe book — Masala Chai and Butter Chicken"
                className="w-full"
                style={{
                  borderRadius: "4px",
                  boxShadow: "0 8px 24px rgba(26,10,0,0.18), 0 2px 6px rgba(26,10,0,0.12)",
                  transform: "rotate(-1.5deg) translateY(-100px)",
                }}
              />
            </div>

            {/* Text — right */}
            <div className="md:w-2/5 space-y-5">
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#C9600A" }}>
                THE RECIPES
              </p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
                  color: "#1A0A00",
                  lineHeight: 0.95,
                  letterSpacing: "0.02em",
                }}
              >
                Every Dish<br />Begins With<br /><span style={{ color: "#C9600A" }}>A Story</span>
              </h2>
              <div className="h-px w-12" style={{ backgroundColor: "#C9A227" }} />
              <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1.05rem", color: "#4A3520", lineHeight: 1.9 }}>
                Before a single flame is lit, before the first spice hits the pan — there is the recipe. Passed down through kitchens, refined through decades, and guarded like family. At Mayur International Kitchen, we cook from memory and mastery, not shortcuts.
              </p>
              <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1.05rem", color: "#4A3520", lineHeight: 1.9 }}>
                From a steaming glass of Masala Chai to a slow-simmered Butter Chicken — every dish in our kitchen carries the weight of fifteen years of love, craft, and an obsession with getting it right.
              </p>
              {/* Two food photos — newspaper inset */}
              <div className="flex gap-3 pt-2">
                <div className="flex-1 border-2" style={{ borderColor: "#1A0A00" }}>
                  <img
                    src={storyDishImg}
                    alt="Butter Chicken — Mayur Kitchen"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3", display: "block" }}
                  />
                  <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.68rem", color: "#7A5C40", fontStyle: "italic", padding: "4px 6px" }}>
                    Butter Chicken — AED {menuPrice("Butter Chicken")}
                  </p>
                </div>
                <div className="flex-1 border-2" style={{ borderColor: "#1A0A00" }}>
                  <img
                    src={chaiImg}
                    alt="Masala Chai — Mayur Kitchen"
                    className="w-full object-cover"
                    style={{ aspectRatio: "4/3", display: "block" }}
                  />
                  <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.68rem", color: "#7A5C40", fontStyle: "italic", padding: "4px 6px" }}>
                    Karak Chai — AED {menuPrice("Karak Chai")}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: "#1A0A00" }}>
                <p className="italic" style={{ fontFamily: "'Biryani', sans-serif", fontSize: "0.9rem", color: "#7A5C40" }}>
                  "We don't cook to fill plates. We cook to carry people home."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 h-[3px] w-full" style={{ backgroundColor: "#1A0A00" }} />

          {/* Restaurant exterior — full bleed closer */}
          <div className="mt-16 relative overflow-hidden" style={{ height: "480px" }}>
            <img
              src={restaurantImg}
              alt="Mayur International Kitchen Dubai — Business Bay restaurant exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: "rgba(26,10,0,0.52)" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.75rem", letterSpacing: "0.35em", color: "#FF5C00" }} className="mb-4">
                VISIT US
              </p>
              <h2 className="text-center" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#fff", lineHeight: 1, letterSpacing: "0.02em" }}>
                Come As You Are.<br /><span style={{ color: "#FF5C00" }}>Leave Satisfied.</span>
              </h2>
              <p style={{ fontFamily: "'Biryani', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginTop: "1.25rem" }}>
                Shop No. 5, The Metropolis Tower, Burj Khalifa Street, Business Bay, Dubai
              </p>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", backgroundColor: "#FF5C00", color: "#1A0A00", letterSpacing: "0.15em", border: "2px solid #1A0A00", boxShadow: "4px 4px 0 #1A0A00" }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="page-video-hero relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
        <video
          className="page-video-media absolute inset-0 w-full h-full object-cover"
          src={galleryHeroVideo}
          poster={galleryHeroPoster}
          aria-label="Night view of the Burj Khalifa framed by palm trees near Mayur International Kitchen Dubai in Business Bay"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <span className="sr-only">
            A night-time shot of the illuminated Burj Khalifa framed by swaying palm trees, close to Mayur International Kitchen Dubai's Business Bay location.
          </span>
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,0,0.94) 0%, rgba(26,10,0,0.6) 48%, rgba(26,10,0,0.16) 100%)" }} />

        <div className="page-video-content relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="page-video-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5C00] [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Mayur International Kitchen Dubai</div>
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Gallery — Food & Restaurant
          </h1>
          <h2 className="text-white/80 max-w-xl mx-auto mb-8 font-normal" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            A glimpse into the flavours and atmosphere of Mayur International Kitchen Dubai, minutes from Burj Khalifa.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <NeonButton to="/menu" secondary>View Full Menu</NeonButton>
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Order via WhatsApp</NeonButton>
          </div>
        </div>
      </section>
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {REAL_GALLERY_IMAGES.map(({ src, alt }) => (
            <div key={alt} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={src} alt={alt} className="w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function BlogIndexPage() {
  return (
    <main className="min-h-screen">
      <section className="page-video-hero relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
        <video
          className="page-video-media absolute inset-0 w-full h-full object-cover"
          src={blogHeroVideo}
          poster={blogHeroPoster}
          aria-label="The Museum of the Future with the Dubai Metro passing beneath it, near Mayur International Kitchen Dubai in Business Bay"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <span className="sr-only">
            A view of Dubai's Museum of the Future with its Arabic calligraphy facade, as a Dubai Metro train passes underneath at sunset, near Mayur International Kitchen Dubai's Business Bay location.
          </span>
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,0,0.94) 0%, rgba(26,10,0,0.6) 48%, rgba(26,10,0,0.16) 100%)" }} />

        <div className="page-video-content relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="page-video-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5C00] [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Mayur International Kitchen Dubai</div>
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Restaurant Blog & Guides
          </h1>
          <h2 className="text-white/80 max-w-xl mx-auto mb-8 font-normal" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Tips, guides, and food stories — Indian food in Dubai explained.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <NeonButton to="/menu" secondary>View Full Menu</NeonButton>
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Order via WhatsApp</NeonButton>
          </div>
        </div>
      </section>
      <div className="w-full px-6 md:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {BLOGS.map((b) => (
          <Link key={b.slug} to={`/blog/${b.slug}`} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <p className="text-xs text-[#7A5C40] mb-2">{b.date}</p>
              <h2 className="font-bold text-xl mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>{b.title}</h2>
              <p className="text-sm text-[#7A5C40]">{b.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold" style={{ color: "#C9600A" }}>Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug);
  if (!post) return <main className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4" style={{ color: "#1E0F00" }}>Article not found</h1><Link to="/blog" style={{ color: "#C9600A" }}>← Back to Blog</Link></div></main>;

  return (
    <main className="min-h-screen">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55 flex items-end pb-10 px-6 justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl" style={{ fontFamily: "'Biryani', sans-serif" }}>{post.title}</h1>
        </div>
      </div>
      <div className="w-full px-6 md:px-12 py-12">
        <p className="text-sm text-[#7A5C40] mb-8">Published: {post.date} · Mayur International Kitchen Dubai</p>
        <div className="columns-1 lg:columns-2 2xl:columns-3 gap-12">
          <RenderContent blocks={post.content} />
        </div>
        {"faq" in post && post.faq && (
          <section className="mt-12 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#FFF8EE" }} aria-labelledby="article-faq-heading">
            <h2 id="article-faq-heading" className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {post.faq.map((item) => (
                <article key={item.question} className="bg-white rounded-xl p-5 border" style={{ borderColor: "rgba(201,96,10,0.16)" }}>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1E0F00" }}>{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A5C40" }}>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {post.slug === "indian-food-delivery-business-bay-downtown" && (
          <section className="mt-8" aria-labelledby="delivery-options-heading">
            <h2 id="delivery-options-heading" className="text-2xl font-bold mb-4" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Order Indian Food Online</h2>
            <DeliveryLinks />
          </section>
        )}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-3" style={{ borderColor: "rgba(201,96,10,0.15)" }}>
          <NeonButton to="/menu" small>Browse Our Menu</NeonButton>
          <NeonButton href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" small secondary>Get Directions</NeonButton>
          <NeonButton to="/blog" small secondary>← All Articles</NeonButton>
        </div>
      </div>
    </main>
  );
}

function TouristGuideIndexPage() {
  return (
    <main className="min-h-screen">
      <section className="page-video-hero relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
        <video
          className="page-video-media absolute inset-0 w-full h-full object-cover"
          src={guidesHeroVideo}
          poster={guidesHeroPoster}
          aria-label="Aerial view of a Dubai beach resort with palm trees, sun loungers, and turquoise water"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <span className="sr-only">
            An aerial drone shot of a Dubai beach resort — white sun loungers lined along the sand beside palm trees and turquoise water, welcoming visitors from around the world.
          </span>
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,0,0.94) 0%, rgba(26,10,0,0.6) 48%, rgba(26,10,0,0.16) 100%)" }} />

        <div className="page-video-content relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="page-video-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5C00] [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Mayur International Kitchen Dubai</div>
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(2.15rem, 6vw, 4rem)" }}
          >
            Visitor Guides — Indian Food in Dubai
          </h1>
          <h2 className="text-white/80 max-w-xl mx-auto mb-8 font-normal" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Tailored guides for every visitor — whether you're Indian, Pakistani, Bangladeshi, Russian, or visiting from the West.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <NeonButton to="/menu" secondary>View Full Menu</NeonButton>
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Order via WhatsApp</NeonButton>
          </div>
        </div>
      </section>
      <div className="w-full px-6 md:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {GUIDES.map((g) => (
          <Link key={g.slug} to={`/tourist-guide/${g.slug}`} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img src={g.img} alt={g.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C9600A]">{g.audience}</div>
              <h2 className="font-bold text-lg mb-1" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>{g.title}</h2>
              <p className="text-sm text-[#7A5C40]">{g.subtitle}</p>
              <span className="mt-3 inline-block text-sm font-semibold" style={{ color: "#C9600A" }}>Read guide →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

function TouristGuideDetailPage() {
  const { nationality } = useParams();
  const guide = GUIDES.find((g) => g.slug === nationality);
  if (!guide) return <main className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4" style={{ color: "#1E0F00" }}>Guide not found</h1><Link to="/tourist-guide" style={{ color: "#C9600A" }}>← All Guides</Link></div></main>;

  return (
    <main className="min-h-screen">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={guide.img} alt={guide.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55 flex items-end pb-10 px-6 justify-center">
          <div className="text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FF5C00]">Visitor guide for {guide.audience}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Biryani', sans-serif" }}>{guide.title}</h1>
          </div>
        </div>
      </div>
      <div className="w-full px-6 md:px-12 py-12">
        <div className="columns-1 lg:columns-2 2xl:columns-3 gap-12">
          <RenderContent blocks={guide.content} />
        </div>
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-3" style={{ borderColor: "rgba(201,96,10,0.15)" }}>
          <NeonButton to="/menu" small>View Full Menu</NeonButton>
          <NeonButton href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" small secondary>Get Directions</NeonButton>
          <NeonButton to="/tourist-guide" small secondary>← All Guides</NeonButton>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="page-video-hero relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
        <video
          className="page-video-media absolute inset-0 w-full h-full object-cover"
          src={contactHeroVideo}
          poster={contactHeroPoster}
          aria-label="The Burj Al Arab sail-shaped hotel viewed across the sea on a sunny day, near Mayur International Kitchen Dubai in Business Bay"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <span className="sr-only">
            A daytime view of the sail-shaped Burj Al Arab hotel across calm blue water, with the Dubai coastline in the background near Mayur International Kitchen Dubai's Business Bay location.
          </span>
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,10,0,0.94) 0%, rgba(26,10,0,0.6) 48%, rgba(26,10,0,0.16) 100%)" }} />

        <div className="page-video-content relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="page-video-eyebrow mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FF5C00] [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Mayur International Kitchen Dubai</div>
          <h1
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Biryani', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Visit Us at Business Bay, Dubai
          </h1>
          <h2 className="text-white/80 max-w-xl mx-auto mb-8 font-normal" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Find us 5 minutes from Burj Khalifa — dine in or order online.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <NeonButton href="tel:+971549966937" icon={Phone} secondary>Call Now</NeonButton>
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20reserve%20a%20table%20for%20%5BNumber%20of%20People%5D%20people." target="_blank" rel="noopener noreferrer" icon={MessageCircle}>Order via WhatsApp</NeonButton>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 py-14 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Contact & Location</h2>
          <div className="space-y-5">
            <div className="flex gap-4">
              <MapPin size={22} style={{ color: "#C9600A" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1E0F00] mb-1">Address</p>
                <p className="text-[#7A5C40]">Shop No. 5, The Metropolis Tower, Burj Khalifa Street Near Downtown, Business Bay, Dubai, UAE</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={22} style={{ color: "#C9600A" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1E0F00] mb-1">Phone</p>
                <a href="tel:+971549966937" className="block font-semibold hover:underline" style={{ color: "#C9600A" }}>054 996 6937</a>
                <a href="tel:+971549966938" className="block font-semibold hover:underline" style={{ color: "#C9600A" }}>054 996 6938</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={22} style={{ color: "#C9600A" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1E0F00] mb-1">Hours</p>
                <p className="text-[#7A5C40]">Open Daily — 10:00 AM to 2:00 AM</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star size={22} style={{ color: "#C9A227" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1E0F00] mb-1">Nearby Landmarks</p>
                <p className="text-[#7A5C40]">5 min from Burj Khalifa · 5 min from Dubai Mall · 8 min walk from Business Bay Metro</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20my%20name%20is%20%5BYour%20Name%5D%20and%20I%27d%20like%20to%20reserve%20a%20table%20for%20%5BNumber%20of%20People%5D%20people." target="_blank" rel="noopener noreferrer" icon={MessageCircle} small>Order via WhatsApp</NeonButton>
            <NeonButton href="tel:+971549966937" icon={Phone} small secondary>Call Now</NeonButton>
            <NeonButton href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" icon={MapPin} small secondary>Get Directions</NeonButton>
          </div>
          <div className="mt-10 rounded-xl p-5" style={{ backgroundColor: "#F2EBE0" }}>
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Delivery Available</h3>
            <p className="text-sm text-[#7A5C40] mb-4">We deliver to Business Bay, Downtown Dubai, DIFC, and surrounding areas. Delivery apps may still list this location under our former name, Burger BAE Cafe.</p>
            <DeliveryLinks compact />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
          <iframe
            title="Mayur International Kitchen Dubai Google Maps location Business Bay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.18!2d55.2629!3d25.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690a392a8037%3A0x1a81e4ec6d2e2228!2sMayur%20International%20kitchen%20Dubai!5e0!3m2!1sen!2sae!4v1720000000000!5m2!1sen!2sae"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}

function PrivacyPage() {
  const resetConsent = () => {
    localStorage.removeItem("mik-cookie-consent");
    window.dispatchEvent(new Event("mik-consent-change"));
    window.location.reload();
  };

  return (
    <main className="min-h-screen px-6 py-20" style={{ backgroundColor: "#F7F3EC" }}>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Privacy & Cookie Policy</h1>
        <p className="mt-3 text-sm text-[#7A5C40]">Last updated: August 5, 2026</p>
        <div className="mt-10 space-y-8 text-[#4A3520] leading-relaxed">
          <section><h2 className="text-2xl font-bold text-[#C9600A]">What this website collects</h2><p className="mt-2">The website does not require an account and does not collect payment information. When analytics consent is granted, we may collect aggregated visit information such as pages viewed and clicks on phone, WhatsApp, directions, and menu search features.</p></section>
          <section><h2 className="text-2xl font-bold text-[#C9600A]">Analytics cookies</h2><p className="mt-2">Google Analytics is loaded only after you select “Accept analytics” and only when the website operator has configured a measurement ID. IP anonymization is enabled. Declining analytics does not affect menus, maps, calling, or WhatsApp links.</p></section>
          <section><h2 className="text-2xl font-bold text-[#C9600A]">External services</h2><p className="mt-2">Opening WhatsApp, Google Maps, telephone links, embedded maps, or externally hosted media may allow those providers to process information under their own privacy policies.</p></section>
          <section><h2 className="text-2xl font-bold text-[#C9600A]">Your choices</h2><p className="mt-2">You can change your analytics choice at any time. Your preference is stored locally in your browser.</p><button onClick={resetConsent} className="mt-4 min-h-11 px-5 font-bold" style={{ backgroundColor: "#FF5C00", border: "2px solid #1A0A00" }}>Reset cookie choice</button></section>
          <section><h2 className="text-2xl font-bold text-[#C9600A]">Contact</h2><p className="mt-2">For privacy questions, contact Mayur International Kitchen Dubai by phone at <a className="underline" href="tel:+971549966937">054 996 6937</a>.</p></section>
        </div>
      </article>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <div className="text-7xl font-bold mb-4" style={{ color: "#C9A227", fontFamily: "'Biryani', sans-serif" }}>404</div>
        <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Biryani', sans-serif", color: "#1E0F00" }}>Page Not Found</h1>
        <p className="text-[#7A5C40] mb-6">The page you're looking for doesn't exist.</p>
        <NeonButton to="/">Back to Home</NeonButton>
      </div>
    </main>
  );
}

function OffersPopup() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (location.pathname === "/offers") {
      setRevealed(true);
      setOpen(true);
      return;
    }
    if (sessionStorage.getItem("mik-offers-seen") === "1") return;
    const t = setTimeout(() => {
      setRevealed(true);
      setOpen(true);
      sessionStorage.setItem("mik-offers-seen", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute("disabled"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex max-w-[calc(100vw-2rem)] flex-col items-end sm:bottom-6 sm:right-6">
      {revealed && !open && (
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="Open Combo Deals"
          title="Combo Deals"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full px-5 font-bold transition-transform duration-300 hover:-translate-y-1"
          style={{ backgroundColor: "#FF5C00", color: "#1A0A00", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em", border: "3px dotted #1A0A00", boxShadow: "4px 4px 0 #1A0A00" }}
        >
          <BadgePercent size={22} aria-hidden="true" />
          <span className="uppercase">View deals</span>
        </button>
      )}

      {open && <button type="button" aria-label="Close offers" onClick={() => setOpen(false)} className="fixed inset-0 bg-black/55 sm:hidden" />}

      <div
        aria-hidden={!open}
        className={`offers-dialog-shell absolute bottom-0 right-0 w-[390px] max-w-[calc(100vw-2rem)] origin-bottom-right transition-all duration-500 ease-out ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none translate-y-5 scale-95 opacity-0"}`}
      >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="offers-title"
            aria-describedby="offers-description"
            className="offers-dialog relative w-full overflow-hidden rounded-[22px]"
            style={{ maxHeight: "min(680px, calc(100dvh - 2rem))", backgroundColor: "#FFF9F0", border: "4px dotted #1A0A00", boxShadow: "8px 8px 0 #1A0A00" }}
          >
            <div className="offers-dialog-header relative px-5 pb-4 pt-5" style={{ backgroundColor: "#FF5C00", borderBottom: "3px dotted #1A0A00" }}>
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close offers popup"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:rotate-6"
                style={{ backgroundColor: "#FFF9F0", color: "#1A0A00", border: "2px solid #1A0A00" }}
              >
                <X size={22} />
              </button>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em", color: "#1A0A00" }}>
                MIKD COMBO BOARD
              </p>
              <h2
                id="offers-title"
                className="offers-dialog-title pr-10 font-bold leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.35rem", color: "#1A0A00", letterSpacing: "0.02em" }}
              >
                Big flavour. Better deals.
              </h2>
              <p id="offers-description" className="mt-1 text-sm font-medium text-[#4A250D]">Eight customer favourites with free add-ons.</p>
            </div>

            <div className="offers-dialog-body overflow-y-auto p-4" style={{ maxHeight: "calc(min(680px, 100dvh - 2rem) - 126px)" }}>
              <div className="space-y-2">
                {COMBO_OFFERS.map((deal) => (
                  <div
                    key={deal.num}
                    className="offers-deal flex items-start gap-3 rounded-xl px-3 py-3"
                    style={{ backgroundColor: "#FFFDF9", border: "2px dotted #9B6A48" }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black" style={{ backgroundColor: "#FF5C00", color: "#1A0A00", border: "2px solid #1A0A00" }}>{deal.num}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-tight text-[#1A0A00]" style={{ fontFamily: "'Biryani', sans-serif" }}>{deal.name}</p>
                      {deal.note && <p className="mt-0.5 text-xs font-semibold text-[#C34A00]">{deal.note}</p>}
                      {deal.free.length > 0 && <p className="mt-1 text-xs text-[#6F4A31]"><span className="font-black text-[#C34A00]">FREE</span> {deal.free.join(" + ")}</p>}
                      {deal.sizes ? (
                        <div className="mt-2 flex gap-4">
                        {deal.sizes.map((s) => (
                          <div key={s.label}>
                            <span className="mr-1 text-[0.7rem] text-[#7A5C40]">{s.label}</span>
                            <span className="font-black text-[#C34A00]">AED {s.to}</span>
                          </div>
                        ))}
                        </div>
                      ) : <p className="mt-1 font-black text-[#C34A00]">AED {deal.to}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="sticky bottom-0 mt-4 grid grid-cols-[1fr_auto] gap-2 bg-[#FFF9F0] pt-2">
                <div>
                  <NeonButton href="https://wa.me/971568701737?text=Hi%2C%20I%27d%20like%20to%20order%20from%20the%20combo%20deals%20menu." target="_blank" rel="noopener noreferrer" icon={MessageCircle} small fullWidth>
                    Order now
                  </NeonButton>
                </div>
                <NeonButton href="tel:+971549966937" icon={Phone} small secondary>Call</NeonButton>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <SiteSeo />
      <Analytics />
      <MotionPreferences />
      <Navbar />
      <NavSpacer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/offers" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/tourist-guide" element={<TouristGuideIndexPage />} />
        <Route path="/tourist-guide/:nationality" element={<TouristGuideDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <OffersPopup />
      <CookieConsent />
    </BrowserRouter>
  );
}
