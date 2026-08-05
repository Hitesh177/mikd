import fs from "node:fs";

const file = new URL("../src/app/App.tsx", import.meta.url);
const source = fs.readFileSync(file, "utf8");
const menuBlock = source.match(/const MENU_CATEGORIES = \[([\s\S]*?)\n\];\n\nconst MENU_PRICE_LOOKUP/);

if (!menuBlock) throw new Error("Could not locate MENU_CATEGORIES in App.tsx");

const prices = new Map();
for (const match of menuBlock[1].matchAll(/\{ name: "([^"]+)", price: "([0-9.]+)" \}/g)) {
  prices.set(match[1].toLowerCase(), match[2]);
}

const aliasBlock = source.match(/const MENU_PRICE_ALIASES: Record<string, string> = \{([\s\S]*?)\n\};/);
const aliases = new Map();
for (const match of (aliasBlock?.[1] || "").matchAll(/"([^"]+)": "([^"]+)"/g)) {
  aliases.set(match[1].toLowerCase(), match[2].toLowerCase());
}

const names = [...new Set([...prices.keys(), ...aliases.keys()])].sort((a, b) => b.length - a.length);
const contentStart = source.indexOf("const BLOGS = [");
const audited = source.slice(contentStart).split("\n");
const discrepancies = [];

for (let index = 0; index < audited.length; index += 1) {
  const line = audited[index];
  for (const name of names) {
    if (names.some((longer) => longer.length > name.length && longer.includes(name) && line.toLowerCase().includes(longer))) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = line.match(new RegExp(`${escaped}[^\\n]{0,48}?AED\\s*(\\d+(?:\\.\\d+)?)`, "i"));
    if (!match) continue;
    const canonical = aliases.get(name) || name;
    const expected = prices.get(canonical);
    if (expected && Number(match[1]) !== Number(expected)) {
      discrepancies.push({ line: source.slice(0, contentStart).split("\n").length + index, name, found: match[1], expected });
    }
  }
}

if (discrepancies.length) {
  console.error("Price discrepancies found:");
  for (const issue of discrepancies) {
    console.error(`  App.tsx:${issue.line} ${issue.name}: AED ${issue.found}; menu says AED ${issue.expected}`);
  }
  process.exit(1);
}

console.log(`Price audit passed: ${prices.size} menu entries checked against named AED references.`);
