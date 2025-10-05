# SCALESTACK - Digital Solutions for Small Businesses

A premium, Apple-style website built for SCALESTACK — providing websites, AI automations, and social media management for small and medium businesses (SMBs).

## Project Overview

**SCALESTACK** helps local businesses (cafés, boutiques, clinics, service providers) scale their operations with:
- Mobile-first websites
- AI-powered automations
- Social media management

## Features

- ✅ Premium Apple-style light theme design
- ✅ Mobile-first responsive layout
- ✅ Hero animation (image landing + staggered text reveal)
- ✅ 11 complete pages with full content
- ✅ Contact form with validation
- ✅ SEO-optimized with SMB-focused keywords
- ✅ Accessibility features (keyboard navigation, reduced-motion support)
- ✅ Real business photography style imagery

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Fonts**: Poppins (headings) + Inter (body)

## Pages

1. **Home** - Hero with animation, services overview, templates preview
2. **Services** - Overview of all services
3. **Service Details** - Individual pages for:
   - Website Building
   - AI Automations
   - Social Media Management
4. **Templates** - 4 SMB templates (Café, Retail, Clinic, Service)
5. **About** - Company mission and values
6. **Contact** - Contact form with demo booking
7. **Blog** - Article listing (2 starter posts)
8. **Legal** - Privacy Policy and Terms of Service

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Recommended: Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd scalestack

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Configuration

### Contact Form Webhook

The contact form is set up to POST form submissions to a webhook. To connect it:

1. Open `src/pages/Contact.tsx`
2. Find the `handleSubmit` function
3. Replace `YOUR_WEBHOOK_URL_HERE` with your n8n/Make/Zapier webhook URL
4. Uncomment the fetch code block

Example webhook payload:
```json
{
  "name": "Customer Name",
  "email": "customer@business.com",
  "message": "Tell us what you want automated...",
  "timestamp": "2024-03-15T10:30:00.000Z"
}
```

### Customizing Content

#### Hero Image
Replace `src/assets/hero-business.jpg` with your own hero image. Import it in `src/pages/Home.tsx`:

```tsx
import heroImage from "@/assets/your-hero-image.jpg";
```

#### Colors & Design System
All design tokens are in `src/index.css`. Customize:
- `--primary`: Main brand color
- `--gradient-primary`: CTA button gradient
- Shadows, animations, and more

#### Fonts
Fonts are loaded via Google Fonts in `index.html`. To change:
1. Update the Google Fonts link
2. Modify font families in `tailwind.config.ts`

## Deployment

### Vercel (Recommended)

```sh
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Netlify

```sh
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Static Export

```sh
# Build for production
npm run build

# The dist/ folder contains your static site
```

Upload the `dist/` folder to any static hosting provider.

## Design System

### Colors (HSL)
- **Background**: `hsl(0 0% 100%)` - White
- **Foreground**: `hsl(215 25% 7%)` - Dark text (#0F1724)
- **Primary**: `hsl(217 91% 60%)` - Blue (#0066FF)
- **Gradient**: `#0066FF → #8A2BE2` (Blue to Purple)
- **Muted**: `hsl(220 9% 46%)` - Gray text (#6B7280)
- **Card**: `hsl(220 20% 97%)` - Light card bg (#F7F8FB)

### Typography
- **Headings**: Poppins (400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600)

### Button Variants
- **Gradient**: Primary CTA (gradient background)
- **Ghost**: Secondary CTA (transparent with border)

## Animations

### Hero Animation
- Image scales from 106% to 100% with fade-in (0.8s)
- Text reveals in staggered sequence after image lands
- Respects `prefers-reduced-motion` for accessibility

### Interactions
- Smooth hover effects on cards and buttons
- Transition duration: 300ms cubic-bezier easing

## Accessibility

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy (single H1 per page)
- ✅ Alt text on all images
- ✅ Keyboard navigation support
- ✅ Form validation with error messages
- ✅ Reduced-motion support for animations
- ✅ Focus states on interactive elements

## SEO

### Meta Tags
All pages include:
- Title (under 60 characters)
- Description (under 160 characters)
- Keywords (SMB-focused)
- Open Graph tags for social sharing

### SMB-Focused Keywords
- "small business website"
- "SMB automation"
- "affordable website for local business"
- "GST billing automation for small business"
- "social media for cafes"

## Project Structure

```
src/
├── assets/           # Images (hero, services, templates)
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Service*.tsx (3 detail pages)
│   ├── Templates.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Blog.tsx
│   ├── Legal*.tsx (2 legal pages)
│   └── NotFound.tsx
├── hooks/
├── lib/
├── index.css        # Design system tokens
└── App.tsx          # Routing configuration
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Development Tips

### Hot Module Replacement
Vite provides instant HMR. Changes appear immediately in the browser.

### Type Safety
TypeScript is configured for strict mode. Run type checking:
```sh
npm run type-check
```

### Linting
```sh
npm run lint
```

## License

© 2024 SCALESTACK. All rights reserved.

## Support

For questions or support:
- Use the contact form on the website
- Email: (add your email)
- Book a demo: [Contact page](/contact)

---

Built with ❤️ by SCALESTACK
