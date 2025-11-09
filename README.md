# TaskJamm - AI-Powered Workflow Automation Landing Page

A modern, professional landing page for TaskJamm's Maddy AI workflow automation platform. Built with Next.js 15 and Tailwind CSS, following the brand guidelines and inspired by contemporary SaaS design.

## Brand Identity

**TaskJamm** features Maddy AI, an intelligent workflow automation agent that manages, prioritizes, and executes routine multi-step tasks.

### Color Palette
- **Primary Blue**: `#0043ff` - Main brand color
- **Secondary Green**: `#74ee15` - Accent and highlights
- **Navy Background**: `#000e2b` - Dark, professional base

### Typography
- **Anton** - Logo and headings
- **Montserrat** - Body text and UI elements

## Features

- ✅ Next.js 15 with App Router and Server Components
- ✅ TypeScript for type safety
- ✅ Tailwind CSS with custom brand colors
- ✅ Google Fonts integration (Anton & Montserrat)
- ✅ Fully responsive design (mobile-first)
- ✅ Professional dark theme with brand colors
- ✅ Smooth transitions and hover effects
- ✅ SEO optimized with metadata
- ✅ Accessible markup

## Landing Page Sections

1. **Fixed Navigation** - Sticky header with brand logo and navigation links
2. **Hero Section** - Compelling value proposition with dual CTAs
3. **Features** - 6 key features with icons and descriptions
4. **Use Cases** - 4 industry-specific automation examples
5. **Stats** - Key metrics and achievements
6. **Pricing** - 3-tier pricing structure (Starter, Professional, Enterprise)
7. **Testimonials** - Customer reviews with ratings
8. **Contact/CTA** - Final conversion section
9. **Footer** - Links, social media, and legal information

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Installation

Dependencies are already installed. To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page in your browser.

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build optimized production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
automation-Landing-Page/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main landing page component
│   └── globals.css      # Global styles + custom Tailwind utilities
├── public/              # Static assets (images, icons)
├── tailwind.config.ts   # Tailwind config with brand colors
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Colors
Update brand colors in [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: "#0043ff",    // Brand blue
  secondary: "#74ee15",  // Brand green
  navy: "#000e2b",       // Background
}
```

### Content
Edit landing page content in [app/page.tsx](app/page.tsx):
- Hero messaging
- Feature descriptions
- Pricing tiers
- Testimonials
- Use cases

### Styling
Custom button styles and utilities are defined in [app/globals.css](app/globals.css):
- `.btn-primary` - Primary CTA button
- `.btn-secondary` - Secondary CTA button
- `.btn-outline` - Outlined button
- `.glow-primary` - Blue glow effect
- `.glow-secondary` - Green glow effect

## Design Reference

This landing page was designed based on:
- **Brand Guide**: TaskJamm/Maddy AI visual identity
- **Reference Site**: [Exosoft.io](https://www.exosoft.io/) - Modern SaaS design patterns

### Design Principles
- ✨ Clean, minimal aesthetic
- 🎨 Consistent brand color usage
- 📱 Mobile-first responsive design
- ♿ Accessible and semantic HTML
- ⚡ Performance optimized
- 🎯 Clear visual hierarchy

## Technologies

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Anton & Montserrat typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
