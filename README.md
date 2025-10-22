# Aarvi Ethnic Studio - Boutique Catalog Website

A beautiful, responsive catalog website for **Aarvi Ethnic Studio**, a home-based boutique specializing in handcrafted Indian ethnic wear.

## 🌟 Features

### Version 1.0 - Static Catalog
- **Home Page**
  - Stunning hero banner with brand tagline
  - About section describing the boutique
  - Featured categories showcase (Bridal, Party Wear, Casual, Festive, Wedding Collection, Everyday Elegance)
  - Call-to-action sections

- **Catalog Page**
  - 12 premium products with AI-generated ethnic wear images
  - Category filtering (All, Bridal, Party Wear, Casual, Festive, Wedding Collection, Everyday Elegance)
  - Product cards with:
    - Product image
    - Product name
    - Product code (PX01-PX12)
    - Price in ₹
    - WhatsApp Enquiry button

- **WhatsApp Integration**
  - Floating WhatsApp button (always visible)
  - Direct enquiry buttons on each product
  - Pre-filled messages with product details
  - WhatsApp Number: +91-9876543210

- **Contact Information**
  - Location: Ludhiana, Punjab
  - Phone: +91-9876543210
  - Instagram: @aarviethnicstudio

- **Design Highlights**
  - Boutique aesthetic with pastel/warm tones (primary: #d4a574, secondary: #8b5e3c)
  - Playfair Display serif font for headings
  - Inter sans-serif font for body text
  - Fully responsive (mobile-first design)
  - Smooth hover effects and animations
  - Professional shadow effects
  - Custom scrollbar styling

## 🚀 Tech Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.9.4
- **Icons**: Lucide React
- **Build Tool**: React Scripts (Create React App)

## 📂 Project Structure

```
/app/frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with contact info
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   │   └── ProductCard.jsx     # Product display card
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   └── Catalog.jsx         # Product catalog page
│   ├── data/
│   │   └── products.js         # Product and category data
│   ├── App.js                  # Main app component
│   ├── App.css                 # App-specific styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles + Tailwind
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎨 Color Palette

- **Primary**: #d4a574 (Warm gold)
- **Secondary**: #8b5e3c (Brown)
- **Accent**: #e8c4a0 (Light peach)
- **Warm Background**: #faf6f0 (Cream)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Install Dependencies
```bash
cd /app/frontend
yarn install
```

### Development Mode
```bash
yarn start
# Opens on http://localhost:3000
```

### Production Build
```bash
yarn build
# Creates optimized build in /build directory
```

## 📱 Features Breakdown

### 1. Responsive Design
- Desktop (1920px+): 4-column product grid
- Tablet (768px-1919px): 2-3 column grid
- Mobile (<768px): 1-2 column grid
- Hamburger menu on mobile

### 2. WhatsApp Integration
**Floating Button**: Always visible in bottom-right corner
**Product Enquiry**: Each product has dedicated enquiry button
**Message Format**: 
```
"Hello, I saw this product on your website. 
I want to know more about Product: [Product Name] (Code: [Product ID])."
```

### 3. Category Filtering
- Dynamic filtering with visual feedback
- Shows count of filtered products
- Smooth transitions

### 4. Product Data Structure
```javascript
{
  id: 'PX01',
  name: 'Royal Bridal Lehenga Set',
  price: '₹8,999',
  category: 'Bridal',
  image: 'https://...'
}
```

## 🌐 Deployment

The website is static and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Deploy Build Folder
```bash
# After running 'yarn build', deploy the /build folder
# Contains all optimized static files
```

## 📞 Contact Configuration

To update contact details, modify:
- WhatsApp number in `/src/components/WhatsAppButton.jsx` and `/src/components/ProductCard.jsx`
- Instagram handle in `/src/components/Header.jsx` and `/src/components/Footer.jsx`
- Location/phone in `/src/components/Footer.jsx`

## 🎯 Product Management

To add/edit products, modify `/src/data/products.js`:

```javascript
export const products = [
  {
    id: 'PX13',
    name: 'Your Product Name',
    price: '₹4,999',
    category: 'Bridal', // Must match a category name
    image: 'image-url'
  }
];
```

## 🔄 Future Enhancements (Version 2.0+)

- Shopping cart functionality
- Payment gateway integration
- User authentication
- Order management system
- Admin dashboard for product management
- Customer reviews
- Wishlist feature
- Size guide
- Live chat support

## 📝 Notes

- All product images are sourced from Unsplash and Pexels
- No backend required for Version 1
- All data is static (in JavaScript files)
- Easy to maintain and update

## 🎉 Version 1.0 Complete

✅ Beautiful boutique design
✅ 12 premium product listings
✅ WhatsApp enquiry integration
✅ Fully responsive
✅ Category filtering
✅ Production-ready build
✅ Static deployment ready

---

**Aarvi Ethnic Studio** - Handcrafted ethnic elegance with a modern touch

For support or updates, contact: +91-9876543210 | @aarviethnicstudio