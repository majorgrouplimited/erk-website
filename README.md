# Erk Sulama & Yazılım - Corporate Website

Corporate website for **Erk Sulama & Yazılım**, a company offering smart irrigation systems and custom software solutions based in Ankara, Turkey.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for bundling and dev server
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **Lucide React** for icons

## Getting Started

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove `dist` directory |
| `npm run lint` | Type-check with TypeScript |

## Project Structure

```
├── index.html          # Entry HTML
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Main app with all sections
│   └── index.css       # Global styles / Tailwind imports
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Site Sections

- **Navbar** — Responsive navigation with mobile menu
- **Hero** — Animated landing section with floating cards
- **Services** — Software (IoT, Web, Automation) and Irrigation (Drip systems, Smart farming, Energy efficiency)
- **About** — Company differentiators
- **Contact** — Contact form and company info
- **Footer**
