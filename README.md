# Top 50 Brands Nigeria

> An editorial-grade web experience for Nigeria's most prestigious annual brand honour roll — designed to feel like a luxury magazine, not a directory.

**Live Demo:** Coming soon

---

## What it is

This is a premium redesign concept for the Top 50 Brands Nigeria ranking. Instead of a basic list, it delivers a ceremony-first digital experience with a cinematic intro, animated signature title reveal, smooth scroll interactions, and an editorial layout that makes the ranking feel prestigious the moment it loads.

Built with a hand-crafted colour system — ivory white, shining gold, and royal emerald — rooted in Nigerian identity.

## Features

- **Ceremonial Opening Sequence** — Logo fades in on arrival, then exits upward before the page reveals
- **Handwritten SVG Title Reveal** — Main title draws itself in script, settling into gold-and-emerald finish
- **Scroll-Driven Animations** — Cards lift, sections reveal with momentum, nothing over-animates
- **Top 4 Brand Spotlight** — Dangote, MTN Nigeria, Access Bank, BUA Group with editorial signal badges
- **Marquee Ticker** — Scrolling brand ribbon across major Nigerian names
- **Palette System Section** — Ivory, Gold, Emerald, Royal Palm cards with colour rationale
- **Methodology Pillars** — Market Relevance, Brand Strength, Business Momentum, Cultural Weight

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Routing | React Router v7 |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js >= 22
- npm >= 10

### Installation

```bash
# Clone the repo
git clone https://github.com/akira2705/top-50-brands-nigeria.git
cd top-50-brands-nigeria

# Install dependencies
npm install

# Start dev server
npm run dev:web
```

The app runs at `http://localhost:5173`

### Build for Production

```bash
npm run build:web
```

## Project Structure

```
apps/
  web/
    src/
      components/   # CeremonialIntro, SignatureTitle, RevealOnScroll, NavBar, Footer
      content/      # siteContent.ts — all copy, brand data, methodology
      pages/        # HomePage, NotFoundPage
      router.tsx    # React Router config
    tailwind.config.ts
    vite.config.ts
```

---

Made by Shivaathmajan P — B.Tech IT, Kumaraguru College of Technology
