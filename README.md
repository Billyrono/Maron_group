# MARON Real Estate Group Website

A modern, responsive static website for **MARON Real Estate Group**, a luxury property developer in Kericho, Kenya. Built with vanilla HTML5, CSS3, and JavaScript featuring animated sections, dark mode support, and premium UX patterns.

**Live Site:** [https://marongroup.netlify.app](https://marongroup.netlify.app)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Design System](#design-system)
- [Pages Guide](#pages-guide)
- [Customization](#customization)
- [Deployment](#deployment)
- [AI Coding Guidelines](#ai-coding-guidelines)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

MARON Real Estate Group is a luxury property marketing website showcasing premium residential properties in Kericho with modern amenities, flexible payment plans, and award-winning design. The site emphasizes brand storytelling, visual appeal, and seamless property discovery.

**Key Goals:**

- Attract potential clients with stunning property showcases
- Build trust through testimonials and company statistics
- Enable easy property browsing and contact inquiries
- Provide mobile-first, accessible experience

---

## Tech Stack

| Layer          | Technology                                                           |
| -------------- | -------------------------------------------------------------------- |
| **Markup**     | HTML5, Semantic HTML                                                 |
| **Styling**    | CSS3 (vanilla + Tailwind CDN), CSS Custom Properties (Design Tokens) |
| **JavaScript** | Vanilla JS (ES6+), jQuery 3.3.1                                      |
| **Icons**      | Font Awesome 6.4.2 (CDN)                                             |
| **Utilities**  | Tailwind CSS v3 (CDN)                                                |
| **Images**     | AVIF/WebP formats with lazy loading                                  |
| **Hosting**    | Netlify                                                              |

---

## File Structure

```
maron_group/
├── index.html                    # Homepage (hero, features, carousel, properties, floor plans, CTA)
├── about.html                    # Company story, stats, amenities, team showcase
├── gallery.html                  # Property gallery grid
├── contact.html                  # Contact form + information cards
├── carousel_section.html         # Standalone carousel component (reference)
├── README.md                     # This file
├── css/
│   ├── maron.css                 # Global stylesheet (design tokens, typography, layouts)
│   └── maron.css.backup          # Backup of original stylesheet
├── js/
│   ├── main.js                   # Core JavaScript (navigation, animations, carousel, counters, forms, dark mode)
│   ├── jquery-3.3.1.min.js       # jQuery library
│   ├── bootstrap-4.3.1.js        # Bootstrap JS (preloader, utilities)
│   └── popper.min.js             # Popper.js (tooltip/dropdown positioning)
├── images/
│   ├── photo-1518733057094-95b53143d2a7.avif
│   ├── photo-1484154218962-a197022b5858.avif
│   ├── photo-1544984243-ec57ea16fe25.avif
│   ├── photo-1524431144429-03fdd30eee26.avif
│   └── [... other property images in AVIF/WebP format]
├── .github/
│   └── copilot-instructions.md   # Guidelines for AI coding agents
└── index.html.backup             # Backup of original homepage
```

---

## Features

### Core Features

- **Responsive Design** — Mobile-first, adapts perfectly to tablet/desktop (breakpoints: 768px, 992px, 1024px)
- **Dark Mode Toggle** — Persisted theme preference via localStorage
- **Animated Hero Section** — Fade-in/slide-in animations on page load
- **Auto-Play Carousel** — Tailwind-based image carousel with manual controls and auto-advance
- **Animated Counters** — Scroll-triggered stats counter with smooth animation
- **Interactive Carousel** — Smooth slide transitions with indicator dots
- **Lazy Loading** — Images load on-demand for performance
- **Form Validation** — Real-time error feedback on contact form
- **Smooth Scrolling** — Hash-link navigation with smooth scroll-to behavior
- **Accessibility** — ARIA labels, semantic HTML, focus states, reduced-motion support
- **SEO Optimized** — Meta tags, Open Graph support, semantic markup
- **Performance** — Optimized images (AVIF/WebP), lightweight vanilla JS, CSS custom properties

### Content Sections

- **Hero** — Bold headline, CTA buttons, animated background overlay
- **Features Grid** — 6 cards highlighting MARON's value propositions (Premium Design, Prime Location, Secure Living, etc.)
- **Project Carousel** — Full-width image carousel with slide captions and navigation
- **Properties Grid** — Responsive card layout showcasing featured properties with badges, location, features, and CTA
- **Floor Plans Tabs** — Interactive tabbed interface for 1-room, 2-room, and 3-room apartment specs
- **Trust Section** — Statistics cards (45+ properties, 120+ families, 98% satisfaction) with fade-in animations
- **CTA Banner** — Gradient background with radial accents, call-to-action button
- **Footer** — Multi-column layout with quick links, contact info, social icons

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Node.js (optional, for local development server)
- Git (for version control)

### Local Development

1. **Clone or Download the Repository**

   ```bash
   git clone https://github.com/your-org/maron-group.git
   cd maron-group
   ```

2. **Open in Browser**

   - Double-click `index.html` to view locally, or
   - Use a local server:

     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (if you have http-server installed)
     npx http-server
     ```

   - Then visit `http://localhost:8000`

3. **Edit Files**
   - Open files in your editor and save
   - Refresh browser to see changes
   - Use browser DevTools (F12) to inspect elements and debug

---

## Development

### Editing Pages

Each page follows a consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags, stylesheets, scripts -->
    <link href="css/maron.css" rel="stylesheet" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Navigation -->
    <nav class="navbar">...</nav>

    <!-- Hero/Header Section -->
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Page Title</h1>
      </div>
    </section>

    <!-- Main Content Sections -->
    <section class="section">
      <div class="container">
        <!-- Content -->
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">...</footer>

    <!-- Scripts -->
    <script src="js/main.js"></script>
  </body>
</html>
```

### CSS Modifications

All styling originates in `css/maron.css`. Key principles:

1. **Use CSS Custom Properties** instead of hardcoding values:

   ```css
   /* ✅ Good */
   color: var(--text-dark);
   padding: var(--spacing-lg);
   background: var(--primary-gradient);

   /* ❌ Avoid */
   color: #2c2c2c;
   padding: 48px;
   background: linear-gradient(...);
   ```

2. **Design Token Reference:**

   - **Colors:** `--primary-color`, `--text-dark`, `--bg-white`, etc.
   - **Spacing:** `--spacing-xs` (8px) through `--spacing-xl` (80px)
   - **Typography:** `--font-heading` (Poppins), `--font-body` (Open Sans), `--font-small` (0.9rem)
   - **Shadows:** `--shadow-sm` through `--shadow-xl`
   - **Transitions:** `--transition-fast` (0.2s), `--transition-base` (0.3s), `--transition-slow` (0.5s)

3. **Grid & Layout:**

   ```css
   /* Properties Grid */
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

   /* Stats Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */
   grid-template-columns: repeat(4, 1fr);
   @media (max-width: 1024px) {
     grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 768px) {
     grid-template-columns: 1fr;
   }
   ```

4. **Responsive Breakpoints:**
   - **1024px (Tablet):** 2-column grids, adjusted layout
   - **992px (Mobile):** Hamburger menu, single-column layout
   - **768px (Small Mobile):** Further reductions, full-width sections

### JavaScript Patterns

Located in `js/main.js`. Key modules:

| Module                      | Purpose                                                                 |
| --------------------------- | ----------------------------------------------------------------------- |
| **Mobile Menu Toggle**      | `.menu-btn` ↔ `.nav-links` visibility + icon swap                       |
| **Navbar Scroll Effect**    | Add/remove `.scrolled` class when past hero (changes navbar background) |
| **Smooth Scrolling**        | Hash-link navigation with `scrollIntoView()`                            |
| **Scroll Animations**       | IntersectionObserver fires `.fade-in` on elements entering viewport     |
| **Form Validation**         | Real-time input validation, error styling, success message              |
| **Active Nav Highlighting** | Dynamically highlights current page link                                |
| **Carousel**                | Auto-play with manual controls, indicator dots, pause-on-hover          |
| **Animated Counters**       | Scroll-triggered number animations (0 → target value)                   |
| **Dark Mode Toggle**        | Toggles `data-theme="dark"`, persists in localStorage                   |
| **Preloader**               | Fade-out on page load complete                                          |

### Adding New Sections

1. Create a new section within the page:

   ```html
   <section class="section">
     <div class="container">
       <div class="text-center mb-lg">
         <h6>Section Subheading</h6>
         <h2>Section Title</h2>
         <p class="text-large">Section description</p>
       </div>
       <!-- Content cards, grids, etc. -->
     </div>
   </section>
   ```

2. Add fade-in animations to child elements:

   ```html
   <div class="feature-card fade-in">
     <!-- Content -->
   </div>
   ```

3. Use `.container` (max-width: 1400px) or `.container-narrow` (1200px) for consistent max-widths.

4. Apply `.section` (80px padding top/bottom) for spacing.

---

## Design System

### Color Palette

| Purpose                    | CSS Variable      | Value                 |
| -------------------------- | ----------------- | --------------------- |
| **Primary (Brand Orange)** | `--primary-color` | rgba(204, 85, 0, 1)   |
| **Primary Light**          | `--primary-light` | rgba(204, 85, 0, 0.8) |
| **Primary Dark**           | `--primary-dark`  | rgba(153, 64, 0, 1)   |
| **Text Dark**              | `--text-dark`     | #2c2c2c               |
| **Text Medium**            | `--text-medium`   | #6c6c6c               |
| **Text Light**             | `--text-light`    | #ffffff               |
| **Background Dark**        | `--bg-dark`       | #1a1a1a               |
| **Background Light**       | `--bg-light`      | #f9f9f9               |
| **Background White**       | `--bg-white`      | #ffffff               |
| **Border Light**           | `--border-light`  | #e5e5e5               |

### Typography

| Element        | Font Family | Size (Desktop)              | Weight |
| -------------- | ----------- | --------------------------- | ------ |
| **h1**         | Poppins     | clamp(2.5rem, 5vw, 4.5rem)  | 800    |
| **h2**         | Poppins     | clamp(2rem, 4vw, 3.5rem)    | 700    |
| **h3**         | Poppins     | clamp(1.5rem, 3vw, 2.5rem)  | 600    |
| **h4**         | Poppins     | clamp(1.25rem, 2.5vw, 2rem) | 600    |
| **Body (p)**   | Open Sans   | 1rem                        | 400    |
| **Small Text** | Open Sans   | var(--font-small) 0.9rem    | 400    |

Uses `clamp()` for fluid typography that scales smoothly between breakpoints.

### Spacing Scale

```
--spacing-xs:  8px
--spacing-sm:  16px
--spacing-md:  24px
--spacing-lg:  48px
--spacing-xl:  80px
```

Apply using margin/padding utility classes: `.mb-lg`, `.mt-md`, `.p-xl`, etc.

### Buttons

**Variants:**

- `.btn.btn-primary` — Orange gradient, shadow
- `.btn.btn-secondary` — Transparent, white border
- `.btn.btn-outline` — Transparent, orange border
- `.btn.btn-dark` — Dark background

**Sizes:**

- `.btn-large` — 20px padding (default for CTAs)
- `.btn-small` — 12px padding

```html
<a href="#" class="btn btn-primary btn-large">Explore Properties</a>
```

---

## Pages Guide

### Homepage (`index.html`)

- **Hero Section** — Full-viewport hero with animated subtitle, headline, description, and dual CTA buttons
- **Features Grid** — 6 cards with icons, highlighting MARON's unique value propositions
- **Carousel** — Auto-playing image carousel showcasing recent projects
- **Properties Grid** — 3 featured properties with location, features, and "View Details" button
- **Floor Plans** — Tabbed interface switching between 1/2/3-room floor plan specifications
- **Trust Section** — 3 stat cards (properties, families, satisfaction rate) with animations
- **CTA Banner** — Final call-to-action with gradient and radial background accents
- **Footer** — Multi-column layout with company info, quick links, contact details, social icons

### About Page (`about.html`)

- **Hero** — Page header with company mission headline
- **Story Section** — Side-by-side text and image showcasing company history and mission
- **Stats Grid** — 4 large stat cards (properties, families, years, awards)
- **Amenities Grid** — 6+ amenity cards with icons and descriptions
- **CTA Section** — Encourage site visitors to schedule a viewing

### Gallery Page (`gallery.html`)

- **Gallery Grid** — Responsive masonry-like grid of property images
- **Hover Overlay** — On hover, property name and description slide up
- **Lightbox Ready** — Structured for lightbox plugin integration

### Contact Page (`contact.html`)

- **Hero** — Page header with "Contact Us" headline
- **Contact Form** — Real-time validation (required, email format)
- **Info Cards** — 3 cards with address, phone, email, and social links
- **Success Message** — Shows after form submission; resets form

---

## Customization

### Change Brand Color

Edit `css/maron.css` `:root` variables:

```css
:root {
  --primary-color: rgba(204, 85, 0, 1); /* Change to your brand color */
  --primary-light: rgba(204, 85, 0, 0.8);
  --primary-dark: rgba(153, 64, 0, 1);
  --primary-gradient: linear-gradient(
    135deg,
    rgba(204, 85, 0, 1) 0%,
    rgba(153, 64, 0, 1) 100%
  );
}
```

All components using `var(--primary-color)` will auto-update.

### Update Company Information

1. **Homepage Title & Meta Tags** — Edit `<title>` and meta tags in `<head>` of each page.
2. **Navigation Links** — Update `.nav-links` in navbar markup.
3. **Footer Info** — Edit footer grid (address, phone, email, social links).
4. **About Page Content** — Replace story text, stats, amenities.

### Replace Images

1. Add new images to `images/` folder (use AVIF/WebP format for best performance).
2. Update `src` attributes in HTML:
   ```html
   <img src="images/your-image.avif" alt="Description" loading="lazy" />
   ```

### Dark Mode Colors

Dark mode overrides are in `[data-theme="dark"]` block at the end of `css/maron.css`. Adjust as needed:

```css
[data-theme="dark"] {
  --text-dark: #f0f0f0;
  --bg-white: #222222;
  --border-light: #3a3a3a;
  /* ... other overrides */
}
```

---

## Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit: MARON website"
   git push origin main
   ```

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build settings:
     - **Build command:** (leave blank — static site)
     - **Publish directory:** `.` (root directory)
   - Click "Deploy"

3. **Custom Domain** (optional)
   - Add your domain in Site Settings > Domain
   - Configure DNS records per Netlify instructions

### Deploy to Other Hosts

This is a **static website** — no server-side processing required. Upload all files to any web host:

- **Shared Hosting:** FTP upload to `public_html/`
- **AWS S3 + CloudFront:** Upload files, configure bucket for static website hosting
- **GitHub Pages:** Push to `gh-pages` branch
- **Vercel:** Connect GitHub repo, auto-deploys on push

---

## AI Coding Guidelines

See `.github/copilot-instructions.md` for detailed guidelines on:

- CSS custom properties and design tokens
- JavaScript patterns (IntersectionObserver, carousel, counters)
- Responsive breakpoints and media queries
- Common pitfalls (navigation selectors, dark mode edge cases, jQuery dependencies)
- Recommended file locations and naming conventions

**Key Principle:** Prefer vanilla CSS variables and centralized tokens over inline hardcoded values.

---

## Troubleshooting

### Heading Sizes Revert After Refresh

**Cause:** CSS override or stylesheet load order issue.

**Fix:**

1. Open DevTools (F12) → Elements → select `h1`
2. In Styles panel, check which rule is applied (lowest specificity wins unless `!important`)
3. Verify `css/maron.css` is being loaded (Network tab, status 200)
4. Check for duplicate `h1` rules with `!important` at the end of `index.html` `<style>` block

**Prevention:** Use CSS custom properties and avoid inline `font-size` attributes; let central stylesheet handle all sizing.

### Dark Mode Not Working

**Cause:** `localStorage` disabled or theme toggle button not found.

**Fix:**

1. Check browser allows localStorage (Privacy settings)
2. Verify `<button class="theme-toggle">` exists in HTML
3. Check `js/main.js` dark mode toggle script runs without errors (DevTools Console)

### Images Not Loading

**Cause:** Incorrect file path or missing image file.

**Fix:**

1. Verify images exist in `images/` folder
2. Check file extensions (.avif, .webp)
3. Use relative paths: `src="images/photo-1234.avif"`
4. Use browser DevTools Network tab to check 404 errors

### Form Validation Not Working

**Cause:** Missing `[required]` attributes or form selector mismatch.

**Fix:**

1. Add `required` attribute to form inputs: `<input type="email" required>`
2. Verify form exists on page and JS selector matches
3. Check DevTools Console for JavaScript errors

### Carousel Not Auto-Playing

**Cause:** JavaScript not loaded or carousel container missing.

**Fix:**

1. Verify `js/main.js` loads without errors (DevTools Console)
2. Check carousel markup has `#tailwind-carousel` ID and `.carousel-track` class
3. Ensure `js/jquery-3.3.1.min.js` loads before carousel script

---

## Support & Contact

For issues, feature requests, or questions:

- **Email:** contact@maron.com
- **Phone:** +(254) 746537878
- **Address:** 1097-20200 Kericho, Kenya

---

## License

This website is proprietary to **MARON Real Estate Group**. All rights reserved.

---

## Version History

| Version | Date     | Changes                                                                    |
| ------- | -------- | -------------------------------------------------------------------------- |
| 1.0     | Dec 2025 | Initial launch: 4-page static website with animations, dark mode, carousel |

---

**Built with ❤️ for MARON Real Estate Group**
