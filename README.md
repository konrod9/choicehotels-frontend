# Choice Hotels Landing Page

A modern, responsive single-page landing page for the Choice Hotels brand, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🏨 Brand presentation with logo and description
- 📱 Fully responsive design (desktop + mobile)
- 📊 Google Analytics 4 integration
- 🏷️ Google Tag Manager integration
- 🎯 CTA click tracking with backend API
- ⚡ Fast performance with Next.js App Router
- 🎨 Modern, clean UI with Tailwind CSS

## Getting Started

1. Copy the environment file:
```bash
cp .env.example .env.local
```

2. Install dependencies:
```bash
npm install
```

3. Ensure the backend API is running (port 5235):
```bash
docker-compose up -d
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Main landing page
│   └── globals.css   # Global styles + Tailwind
├── components/
│   ├── Analytics.tsx  # Google Analytics & GTM
│   ├── Navigation.tsx # Fixed navigation bar
│   ├── Hero.tsx       # Hero section
│   ├── Features.tsx   # Features grid
│   ├── CTA.tsx        # Call-to-action section
│   └── Footer.tsx     # Site footer
└── lib/
    ├── api.ts         # API configuration
    └── tracking.ts    # Click tracking utilities
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Backend API

The backend is a .NET 10 ASP.NET Core API with PostgreSQL:
- `GET /click?offer=ChoiceHotels&sub1=...` — Tracks click and redirects
- `GET /clicks` — Returns all tracked clicks
- Runs on port 5235 (Docker)
