# BE Fitness - Professional Gym Website

A fully responsive, modern web application built for **BE Fitness**, showcasing high-performance facility details, premium layout structure, dynamic video backgrounds, and interactive feature lists.

## Features

- **Dynamic Video Hero**: The hero section greets users with an immersive, full-screen looping video background (`hero-background.mp4`) that seamlessly integrates with the site's aggressive typography.
- **Sectioned Architecture**: Includes logically portioned content sections:
  - **About**: Detailed insights into BE Fitness (`about-facility.jpg`).
  - **Video Tour**: Embedded native HTML5 video player to take a virtual walk around the gym floor (`tour-video.mp4`).
  - **Services**: Service highlights using semantic grid-layouts.
  - **Pricing**: Responsive 3-column subscription pricing table ensuring desktop legibility and mobile responsiveness.
  - **Members (Testimonials)**: CSS Grid success stories showcasing verified member testimonials.
- **Floating Contact Widgets**: Fixed, native Call and WhatsApp floating action buttons pinned to the interface bottom-right with interactive hover capabilities.
- **Mobile First & Responsive**: Built with CSS Flexbox & CSS Grid, guaranteeing robust functionality flawlessly scaling from standard Web to Mobile screens (via `responsive.css`).

## Project Structure

```text
/
├── index.html          # Main HTML structure with semantic sections
├── README.md           # Project Documentation
├── css/
│   ├── style.css       # Global design variables, aesthetics, animations
│   └── responsive.css  # Media queries for scaling across desktop, iPad, & phones
├── images/
│   ├── logo.png                # Main Navigation Logo
│   ├── hero-background.mp4     # Hero Section Background Loop
│   ├── tour-video.mp4          # Virtual Facility Tour Video
│   ├── about-facility.jpg      # The About Us representation photo
│   └── (service/trainer/testimonial specific named images)
└── js/
    └── main.js         # Navigation states, scroll events, etc.
```

## Setup & Deployment

1. **Development**:
   - The application relies on completely static frontend technologies. No build steps (like Webpack or Node.js) are needed.
   - Simply double-click `index.html` to open and preview natively in any modern browser.
2. **Hosting/Deployment**:
   - Ready for immediate static deployment via Vercel, Netlify, GitHub Pages, or Hostinger.
   - No backend runtime required.

## Upcoming Revisions / File Naming Schema
Media assets within `./images/` have been re-indexed utilizing semantic nomenclature natively representing the UI area (e.g., `testimonial-...`, `service-...`) rather than legacy random characters (`a.jpg`, `1.mp4`). If replacing media assets down the road, simply match the structured mapping filenames located inside the `index.html`.
