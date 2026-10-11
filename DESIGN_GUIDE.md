# AI Design System Guide: Industrial Obsidian Editorial

This guide provides complete design tokens, typography rules, layout patterns, and component blueprints to recreate the exact visual aesthetic of this website.

---

## 1. Aesthetic DNA

- **Philosophy:** High-precision engineering meets editorial brutalism. Industrial, dark obsidian console aesthetic with editorial typography and dusty-rose accents.
- **Atmosphere:** Clean, dark, technical, restrained. Avoid noisy neon glows, generic purple gradients, or bubbly rounded pill designs.
- **Precision:** 1px hairline borders, subtle hover elevations, uppercase condensed typography for metadata, and high-contrast headlines.

---

## 2. Color Palette & Design Tokens

```css
:root {
  color-scheme: dark;

  /* Surfaces & Backgrounds */
  --paper: #0c0e14;          /* Deep Obsidian canvas */
  --raised: #151922;         /* Card & panel surface */
  --raised-hover: #1b212d;   /* Hover surface */

  /* Hairlines & Boundaries */
  --line: #262c36;           /* Subtle structural borders */

  /* Typography */
  --ink: #f0f3f6;            /* Crisp primary text & titles */
  --muted: #9aa1ad;          /* Secondary metadata & kickers */
  --prose: #c5d0d8;          /* Body copy reading color */

  /* Accent & Highlight */
  --accent: #f3b4c0;         /* Signature Dusty Rose / Blush */
  --accent-soft: rgba(243, 180, 192, 0.12); /* Subtle glow & tint */
  --accent-glow: rgba(243, 180, 192, 0.25);

  /* Status Colors */
  --status-online: #10b981;  /* Emerald pulsing indicator */
  --status-info: #38bdf8;    /* Cerulean verification tag */
}
```

### Global Background Ambient Lighting
Apply this subtle dual radial gradient to the body canvas:
```css
body {
  margin: 0;
  background-color: var(--paper);
  background-image:
    radial-gradient(ellipse 90% 50% at 50% -10%, rgba(243, 180, 192, 0.05), transparent),
    radial-gradient(ellipse 60% 40% at 90% 15%, rgba(45, 60, 85, 0.12), transparent);
  color: var(--ink);
  font-family: Barlow, "Segoe UI", sans-serif;
  font-size: 1.02rem;
  line-height: 1.55;
  min-height: 100vh;
}
```

---

## 3. Typography Hierarchy

Load Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

| Element | Font Family | Weight | Case / Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display Titles** | `Anton, Impact, sans-serif` | 400 | Uppercase, `line-height: 0.85 - 0.95` | Page titles, massive hero headlines |
| **Section Kickers & Nav** | `"Barlow Condensed", sans-serif` | 600 | Uppercase, `letter-spacing: 0.08em` | Category kickers, navigation links, badges |
| **Card / Entry Headlines** | `"Barlow Condensed", sans-serif` | 600 | Uppercase, `letter-spacing: 0.02em` | Card titles, project names, blog titles |
| **Body & Paragraphs** | `Barlow, "Segoe UI", sans-serif` | 400 / 500 | Normal, `line-height: 1.55 - 1.65` | Article summaries, descriptions, paragraphs |
| **Code / Technical Data** | `ui-monospace, "SF Mono", monospace`| 400 | Normal | Code snippets, technical parameters |

---

## 4. Layout Architecture

### Container Width
```css
.wrap {
  width: min(1280px, calc(100% - 2rem));
  margin: 0 auto;
}
```

### Two-Column Split (Main Stream + Aside)
```css
.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (min-width: 960px) {
  .content-layout {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 2.75rem;
    align-items: start;
  }

  .aside-stream {
    position: sticky;
    top: 1.75rem;
  }
}
```

### Frosted Fixed Navigation
```css
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.85rem 0;
  background: rgba(12, 14, 20, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
```

---

## 5. Component Patterns & CSS Blueprints

### A. Card Wrapper
Cards feature a dark raised slate surface, hairline border, and gentle lift on hover:
```css
.card-wrapper {
  background: var(--raised);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 1.6rem 1.75rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.card-wrapper:hover {
  border-color: rgba(243, 180, 192, 0.35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.card-kicker {
  margin: 0;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink);
}

.card-divider {
  border: 0;
  border-top: 1px solid var(--line);
  margin: 1.1rem 0 1.35rem;
}
```

### B. Category Pill & Tech Tags
```css
/* Category Pill (Kicker) */
.project-pill,
.card-tag {
  display: inline-flex;
  align-items: center;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--accent);
}

/* Technology / Skill Tag */
.tech-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--muted);
}
```

### C. Buttons & Action CTAs
```css
/* Primary Action Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  background: var(--accent);
  color: #121416;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: filter 0.15s ease, transform 0.15s ease;
}

.cta-button:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

/* Secondary Ghost Button */
.cta-button.secondary {
  background: var(--raised);
  color: var(--ink);
  border: 1px solid var(--line);
}

.cta-button.secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Compact Pill Link (e.g., "View Project" or "More") */
.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: #121416;
  background: var(--accent);
  padding: 0.35rem 0.85rem;
  border-radius: 4px;
  flex-shrink: 0;
  transition: filter 0.15s ease;
}

.project-link-btn:hover {
  filter: brightness(1.1);
}
```

### D. Interactive List / Grid Item (Blogs, Tools, Nav Cards)
```css
.card-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.15rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--line);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.card-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.card-item:hover .item-title {
  color: var(--accent);
}

/* Diagonal arrow icon shift on hover */
.card-item:hover .external-indicator {
  opacity: 1;
  transform: translate(2px, -2px);
}
```

### E. Status Dot (Pulsing Live Indicator)
```css
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--status-online);
  box-shadow: 0 0 8px var(--status-online);
  animation: pulse-dot 2.5s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.9); }
}
```

---

## 6. Rules for AI Agents

1. **Always use Dark Mode as default:** Dark canvas (`#0c0e14`) with `#151922` cards and `#f0f3f6` ink.
2. **Typography pairing rule:**
   - Big titles & hero heads: `Anton` (uppercase, condensed line-height).
   - Labels, category kickers, tags, badges, buttons: `Barlow Condensed` (uppercase, letter-spaced).
   - Reading paragraphs & summaries: `Barlow` (regular case, 1.55 line-height).
3. **Accent restraint:** Use `--accent: #f3b4c0` for interactive highlights, buttons, and badges. Do **not** overload the page with bright saturated colors.
4. **Dividers and borders:** Always use hairlines `1px solid #262c36`. Avoid heavy shadows or borders thicker than 1px.
5. **Interactive feedback:** On cards, use `transform: translateY(-2px)` with subtle border highlight (`border-color: var(--accent)`). On external links, animate the arrow `translate(2px, -2px)`.
