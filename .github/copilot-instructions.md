# MARON Real Estate Group - AI Coding Agent Instructions

## Project Overview

MARON is a **static HTML/CSS/JS real estate website** for a luxury property group in Kericho, Kenya. It's a multi-page marketing site showcasing properties with modern UX patterns (dark mode, carousels, animations).

**Tech Stack:**

- **Frontend:** HTML5, vanilla JavaScript, Tailwind CSS (via CDN), Bootstrap (jQuery)
- **Styling:** Custom CSS (`css/maron.css`) + Tailwind utility classes + inline styles
- **JavaScript:** jQuery 3.3.1 + vanilla JS modules in `js/main.js`
- **Assets:** AVIF/WebP images in `images/`

## Architecture & Key Components

### Design System (CSS Variables)

All colors, spacing, fonts, and shadows defined in `:root` in `maron.css`. **Always use CSS custom properties** instead of hardcoding values:

- **Colors:** `--primary-color: rgba(204, 85, 0, 1)` (orange brand), text variants, backgrounds
- **Spacing:** `--spacing-xs` through `--spacing-xl` (8px to 80px increments)
- **Typography:** Poppins (headings), Open Sans (body)
- **Transitions:** `--transition-fast/base/slow` for consistent animation timing

### Page Structure (4 main pages)

- **`index.html`** - Homepage: hero, features grid, carousel section, properties grid, floor plans tabs, CTA, footer
- **`about.html`** - Company story, stats grid (45+ properties, 120+ families), amenities showcase
- **`gallery.html`** - Grid gallery (not fully reviewed, but referenced)
- **`contact.html`** - Form + info cards (not fully reviewed, but referenced)

### Navigation System (`maron.css` + `main.js`)

- **Fixed navbar** with logo and nav links
- **Transparent by default** (`.navbar` without background), **becomes opaque on scroll** past hero (`navbar.scrolled` class added at `window.scrollY > window.innerHeight`)
- **Mobile menu:** `.menu-btn` toggles `.nav-links.active` with slide-in animation (hamburger icon swaps fa-bars ↔ fa-times)
- **Active link highlighting:** Dynamically adds font-weight:700 to current page link

### JavaScript Patterns (`js/main.js`)

#### 1. **Scroll-Based Behaviors**

```javascript
// Navbar scrolled state
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
```

#### 2. **Intersection Observer for Animations**

Used for fade-in effects and lazy image loading. Elements with class `.fade-in` animate in when scrolled into view:

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
);
```

#### 3. **Tailwind Carousel** (index.html)

Manual carousel implementation with:

- `carousel-track` (flex container, animated with `translateX`)
- `carousel-slide` elements (min-width: full)
- Auto-play every 3 seconds, pause on hover
- Dot indicators with click-to-slide

#### 4. **Animated Counters**

Stats cards (`.counter-card[data-target]`) animate numbers on scroll. Resets when scrolled away.

#### 5. **Form Validation**

Real-time validation with error styling (red border, error message span). Clears errors on successful input.

#### 6. **Dark Mode Toggle**

Stores theme preference in `localStorage`. Icon toggles between fa-moon/fa-sun. Respects system preference on first visit.

### CSS Patterns & Conventions

#### **Grid-Based Layouts**

- Properties grid: `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))`
- Stats grid: `grid-template-columns: repeat(4, 1fr)` (responsive to 2/1 on smaller screens)
- Amenities: `repeat(auto-fit, minmax(300px, 1fr))`

#### **Card Hover Effects**

Standard pattern across feature cards, property cards, gallery items:

```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}
```

#### **Animations**

- **Fade-in:** `@keyframes fadeIn` (0s opacity, 30px translateY → 1s, 0px)
- **Ripple effect on buttons:** `.btn::before` pseudo-element expands on hover
- **Image zoom on hover:** `transform: scale(1.1)` on `.property-card:hover .property-image img`

#### **Responsive Breakpoints**

- **Tablet (1024px):** 2-column grids → 1, adjust layout
- **Mobile (992px):** Hamburger menu, nav-links becomes full-screen overlay
- **Small Mobile (768px):** All grids to 1 column, hero font-size adjusts

#### **Prefers-Reduced-Motion**

Disable animations for accessibility: `@media (prefers-reduced-motion: reduce) { animation-duration: 0.01ms !important; }`

## Development Workflow & Common Tasks

### Adding New Sections

1. Use `.section` class with appropriate padding: `padding: var(--spacing-xl) 0`
2. Wrap content in `.container` (max-width: 1400px) or `.container-narrow` (1200px)
3. Use heading hierarchy: `.text-center mb-lg` for section titles + heading tags
4. Add fade-in animations to child elements for scroll entrance

### Button Patterns

- **Primary:** `.btn.btn-primary` (orange gradient, shadow)
- **Secondary:** `.btn.btn-secondary` (transparent, white border)
- **Outline:** `.btn.btn-outline` (transparent, orange border)
- **Dark:** `.btn.btn-dark` (dark background)
- **Sizes:** `.btn-large` (20px padding), `.btn-small` (12px padding)

### Color Usage

- **Primary/CTA:** `var(--primary-color)` (orange)
- **Text on light:** `var(--text-dark)` (dark gray)
- **Text on dark:** `var(--text-light)` (white)
- **Backgrounds:** `var(--bg-white)`, `var(--bg-light)`, `var(--bg-dark)`

### Responsive Images

- Always use `loading="lazy"` attribute for performance
- Use AVIF/WebP format in `images/` folder
- Use `object-fit: cover` in containers for consistent sizing

### Form Elements

Consistent styling via `.form-group` + `.form-group label/input/textarea`. Focus states add `border-color: var(--primary-color)` + shadow.

## Common Pitfalls & Patterns

### 1. **Navigation Selector Mismatch**

Code uses both `.links` and `.nav-links` — main.js expects `.links` but HTML uses `.nav-links`. Be aware when modifying menu behavior.

### 2. **Dark Mode Edge Cases**

Theme toggle works, but some inline styles in HTML (e.g., button colors in hero) may not respect dark mode. Always use CSS variables for dynamic content.

### 3. **jQuery Dependency**

Project uses jQuery 3.3.1 for carousel (`.carousel("pause")`), preloader, and some utilities. Don't remove jQuery without replacing carousel logic.

### 4. **Mobile Menu Selector**

Hamburger menu selects `.menu-btn` and `.links` — if you rename `.nav-links` to something else, update the JavaScript selector.

### 5. **Carousel Auto-Play**

Auto-advances every 3 seconds. Pause on hover handled by `mouseenter/mouseleave`. Test auto-play interaction on scroll.

## Recommended File Locations & Examples

- **New page templates:** Copy structure from `about.html` (page-hero + section + footer pattern)
- **Reusable components:** Add to `.container` with margin classes (`.mb-lg`, `.mt-md`)
- **Custom CSS:** Add to `maron.css` in appropriate section (use existing structure)
- **JavaScript modules:** Add to `main.js` wrapped in `DOMContentLoaded` event
- **Images:** Place in `images/` folder, reference with relative paths

## Next Steps for AI Agents

When enhancing this codebase:

1. ✅ Maintain CSS variable usage for theming
2. ✅ Test responsive design at 992px and 768px breakpoints
3. ✅ Preserve vanilla JS patterns (avoid framework migration)
4. ✅ Update meta tags for SEO on any new pages
5. ✅ Test dark mode toggle with new components
6. ✅ Lazy-load images and optimize AVIF/WebP usage
