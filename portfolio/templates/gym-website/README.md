# PowerForge Gym Website

## Folder Structure
```
gym-website/
├── index.html          ← Homepage (main page)
├── about.html          ← About Us page
├── classes.html        ← Classes + Timetable page
├── services.html       ← Services & Facilities page
├── gallery.html        ← Photo gallery with filters
├── contact.html        ← Contact form + Branch details
├── assets/
│   ├── css/style.css   ← All styles (edit colors/fonts here)
│   └── js/main.js      ← All interactivity
└── README.md           ← This file
```

---

## How to Customize

### 1. Gym Name
Search & Replace "PowerForge" with your gym name in all HTML files.

### 2. Phone Number
Replace all `+919999999999` with your real WhatsApp number.

### 3. Email
Replace `info@powerforgegym.com` with your real email.

### 4. Address
Replace "123, Fitness Street..." with your real address.

### 5. Logo
- Save your logo as `assets/img/logo/logo.png`
- In each HTML file, find the `.nav-logo` section and replace the text with:
  `<img src="assets/img/logo/logo.png" alt="Your Gym Logo" style="height:45px">`

### 6. Replace Placeholder Images
All images use `picsum.photos` (random placeholder images).
Replace each `src="https://picsum.photos/..."` with your real gym photos.
**Tip:** Save your photos in `assets/img/` and reference them like `assets/img/gallery/photo1.jpg`

### 7. Hero Background
In `style.css`, find `.hero-bg` and change:
`background-image: url('YOUR_PHOTO.jpg');`

### 8. Pricing
Edit the plan amounts in `index.html` under the `#pricing` section.

### 9. Google Maps
In `contact.html`, replace the `<iframe src="...">` with your real Google Maps embed code.
(Go to Google Maps → your location → Share → Embed a map → Copy HTML)

### 10. YouTube Video
In `index.html`, find `YOUR_YOUTUBE_VIDEO_ID` and replace with your actual video ID from YouTube.

### 11. Colors (Optional)
Open `assets/css/style.css` and edit the `:root` section:
```css
--gold: #c9a84c;       /* Main gold color */
--gold-light: #f0c860; /* Lighter gold */
--black: #0a0a0a;      /* Background */
```

### 12. Branch Names
Replace "Branch - Location 1", "Branch - Location 2" etc. with your real branch names throughout all files.

---

## How to Open
Just double-click `index.html` in your browser — no server needed!

For best results, use a local server (VS Code Live Server extension recommended).
