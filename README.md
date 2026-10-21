# Portfolio Website

A modern, responsive portfolio website built with React and Vite, deployed on GitHub Pages.

## Features

- **Multi-page navigation** with React Router
- **Responsive design** that works on all devices
- **Multiple sections**: Home, About, Projects, Skills, Contact
- **Contact form** with validation
- **Project showcase** with technology tags
- **Skills organized by category**
- **Professional styling** with smooth transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sam-rubin/sam-rubin.github.io.git
cd sam-rubin.github.io
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Deployment to GitHub Pages

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the site and deploy it to GitHub Pages. Your portfolio will be live at `https://sam-rubin.github.io/`

## Customization

### Update Your Information

1. **Home Page** (`src/pages/Home.jsx`): Update the hero section with your name and tagline
2. **About Page** (`src/pages/About.jsx`): Add your experience and education
3. **Projects Page** (`src/pages/Projects.jsx`): Add your projects with descriptions and links
4. **Skills Page** (`src/pages/Skills.jsx`): Update your skills and categories
5. **Contact Page** (`src/pages/Contact.jsx`): Update your contact information and email

### Styling

- Main styles are in `src/App.css`
- Global styles are in `src/index.css`
- Edit CSS variables in `App.css` to change colors and spacing

### Color Scheme

Edit these CSS variables in `src/App.css`:
```css
--primary-color: #0066cc;     /* Main brand color */
--secondary-color: #f0f0f0;   /* Light background */
--text-color: #333;           /* Text color */
--border-color: #e0e0e0;      /* Border color */
```

## Project Structure

```
├── index.html                 # Entry HTML file
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app with routing
│   ├── App.css               # Main styles
│   ├── index.css             # Global styles
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── Skills.jsx
│       └── Contact.jsx
└── README.md
```

## Technologies Used

- **React** - UI framework
- **React Router** - Client-side routing
- **Vite** - Build tool
- **gh-pages** - GitHub Pages deployment

## License

This project is open source and available under the MIT License.
