# Claude Code — Project Context: Super Grumpy Chef

## Project Brief

Build a **showcase restaurant website** for **Super Grumpy Chef** — a bold, personality-driven dining brand built on the Grumpy Chef personal brand (Christian Schiffner). The site should communicate premium food, an unapologetic chef persona, and convert visitors into diners and fans.

## Brand Identity

- **Name:** Super Grumpy Chef
- **Tone:** Bold, direct, slightly irreverent — "no BS, great food"
- **Audience:** Food lovers who appreciate honesty, craft, and personality over fine-dining pretension
- **Colour Direction:** Dark, moody backgrounds. Warm amber/gold accents. High contrast typography.
- **Typography:** Display serif for headings (editorial feel), clean sans-serif for body

## Tech Stack

- Pure HTML + CSS + Vanilla JS (no frameworks)
- CSS custom properties for the design token system
- Light + Dark mode toggle
- Mobile-first responsive design
- No build tools required — works by opening `index.html` directly

## Design System

See `style.css` for all design tokens. Key values:

```
--color-bg: #0d0c0a          (near-black, warm)
--color-accent: #d97706      (amber gold)
--color-text: #f5f0e8        (warm off-white)
--font-display: 'Playfair Display'
--font-body: 'Work Sans'
```

## Pages to Build

### 1. Hero Section
- Full-viewport dark hero with food photography
- Brand name in large display serif
- Tagline: "No fluff. Just flavour."
- Two CTAs: [View Menu] [Reserve a Table]

### 2. About Section
- Short chef bio (personality-forward)
- Philosophy: honesty, craft, seasonal ingredients
- Optional pull-quote from the chef

### 3. Menu Section
- Category filter tabs (Starters / Mains / Desserts / Drinks)
- Menu cards: dish name, description, price
- Dietary tags (V, GF, etc.)

### 4. Gallery
- Masonry-style food photography grid

### 5. Reservations
- Simple booking form: name, date, time, party size, message
- Inline form validation
- Confirmation state after submit

### 6. Contact / Footer
- Address, hours, phone, socials
- Google Maps embed placeholder
- Footer nav

## Claude Code Workflow

When building this project:
1. Always start from `style.css` design tokens — never hardcode values
2. Build mobile-first (375px), then desktop
3. Run `npx eslint main.js` after any JS changes
4. Commit often with conventional commit messages (`feat:`, `fix:`, `style:`)
5. Check both light and dark mode after every section

## Key Files

| File | Purpose |
|---|---|
| `index.html` | Single-page app, all sections |
| `style.css` | Design tokens + global styles |
| `main.js` | Menu filter, form validation, dark mode toggle |
| `CLAUDE.md` | This file — project context for Claude Code |

## Sample Menu Data (use as placeholder)

```js
const menuItems = [
  { name: 'Bone Marrow Bruschetta', category: 'starters', price: 16, desc: 'Roasted marrow, herb gremolata, toasted sourdough', tags: [] },
  { name: 'Pan-Seared Duck Breast', category: 'mains', price: 38, desc: 'Cherry jus, celeriac purée, wilted greens', tags: [] },
  { name: 'Bitter Chocolate Tart', category: 'desserts', price: 14, desc: '72% dark chocolate, salted caramel, crème fraîche', tags: ['GF'] },
  { name: 'Smoked Negroni', category: 'drinks', price: 18, desc: 'House-smoked gin, Campari, sweet vermouth, orange', tags: [] },
  { name: 'Burrata & Heirloom Tomato', category: 'starters', price: 18, desc: 'Aged balsamic, basil oil, sea salt', tags: ['V', 'GF'] },
  { name: 'Wild Mushroom Risotto', category: 'mains', price: 32, desc: 'Porcini, truffle, aged parmigiano', tags: ['V', 'GF'] },
];
```
