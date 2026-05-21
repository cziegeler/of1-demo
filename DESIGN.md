# LEGO.com — Design System Extraction

## Typography

| Token | Value |
|-------|-------|
| Font Family | "Cera Pro", sans-serif |
| Heading 2XL | 32px / 700 |
| Heading MD | 20px / 700 |
| Body MD Bold | 16px / 700 |
| Body MD Medium | 16px / 500 |
| Body MD Regular | 16px / 400 |
| Label MD Bold | 14px / 700 |
| Label MD Medium | 14px / 500 |
| Label MD Regular | 14px / 400 |
| Body XS Regular | 12px / 400 |

## Color Palette

### Brand Colors
- **LEGO Yellow**: `#FFD500` / `rgb(255, 213, 2)` — used for badges ("New"), Insiders branding, accent highlights
- **LEGO Red**: `#D0021B` / `rgb(208, 2, 27)` — primary CTA ("Add to Bag"), sale prices
- **LEGO Blue**: `#006DB7` / `rgb(0, 109, 183)` — secondary links, "Learn more" CTAs
- **Blue Link**: `#005AD2` / `rgb(0, 90, 210)` — text links in body copy
- **Promo Blue**: `#D1E8FF` / `rgb(209, 232, 255)` — background on promotional banners

### Neutral Palette
- **Black**: `#000000` — primary text, headings
- **Dark Gray**: `#141414` — badge text on yellow
- **Charcoal**: `#2C2C2C` — secondary text, navigation items
- **Gray**: `#757575` — muted text, disabled states
- **White**: `#FFFFFF` — primary background, card surfaces

## Components

### Product Card
- White background with subtle shadow (`0 2px 8px rgba(0,0,0,0.08)`)
- 1:1 square image area (product on white background)
- Product name: Body MD Medium, black
- Price: Body MD Bold, black (or red when on sale)
- Badge: yellow pill with "New" / "Exclusive" text
- Border radius: 8px
- Hover: slight lift with increased shadow

### Buttons
- **Primary (Add to Bag)**: Red `#D0021B`, white text, 999px border-radius (pill), bold weight
- **Secondary**: Transparent bg, black border 2px, black text, pill radius
- **Tertiary/Link**: Blue `#006DB7`, no border, text-only with underline on hover

### Hero Banners
- Full-width imagery (product lifestyle shots)
- Overlay text: white on dark imagery, or black on light sections
- Carousel with dot indicators

### Navigation
- Horizontal top bar: white background, black text
- Mega-menu dropdowns for Shop/Discover
- Breadcrumbs: Home > Theme > Product (separator: >)

### Feature Hotspots (PDP)
- Interactive image with clickable hotspot dots
- Popover on click: title (Heading style) + description (Body XS)
- Features: Dihedral doors, Steering, Rear Wing Spoiler, Suspension, V8 Engine, Removable Rear Hood, Exhaust

### Loyalty Banner
- Yellow `#FFD500` background accent
- "Earn {N} LEGO® Insiders Points" copy
- Icon-based reward tiers

## Layout Patterns

### Grid System
- Product grid: 4 columns desktop, 2 columns tablet, 1 column mobile
- Max content width: ~1200px centered
- Gutter: 16px

### Section Rhythm
- Section padding: 48px–64px vertical
- Between-card spacing: 16px
- Card internal padding: 16px

## Imagery Style
- Product shots: 3/4 angle on pure white background
- Lifestyle shots: depth-of-field, warm lighting, adult hands/environments
- Hero imagery: cinematic, dark backgrounds for premium positioning
- All images served from `www.lego.com/cdn/cs/set/assets/` CDN with fit=crop quality params

## Brand Signatures
- ® symbol after "LEGO" in first mention per section
- ™ symbol for theme names (Technic™) and licensed properties (McLaren P1™)
- "18+" age badge prominently displayed on adult sets
- Insiders points callout on every PDP
- Free shipping threshold banner persistent in header
