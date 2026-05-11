# Amos Ngeno Portfolio

A professional portfolio website built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Pre-built accessible components
- **Framer Motion** - Animations
- **Lucide React** - SVG icons

## Design

- Dark cyberpunk aesthetic
- Fonts: Orbitron (headings) + JetBrains Mono (body)
- Colors: Electric Blue (#2563EB) + Vibrant Orange (#F97316)
- Glassmorphism cards, gradient meshes, grain texture

## Structure

```
app/
  page.tsx          # Home (hero, typewriter, highlights)
  about/page.tsx    # About (timeline, values)
  projects/page.tsx # Projects (filterable grid)
  skills/page.tsx   # Skills (bars, tech orbit)
  contact/page.tsx  # Contact (form + socials)
  layout.tsx        # Root layout
  globals.css       # Theme & styles

components/
  navbar.tsx        # Floating navigation
  footer.tsx        # Site footer
  ui/               # shadcn/ui components
```

## Notes

- The shadcn/ui components in `components/ui/` are pre-configured. Install them fresh with `npx shadcn@latest init` if needed.
- Replace the profile photo placeholder on the home page with your actual image.
- Update social links (GitHub, LinkedIn) in the footer and contact page.
