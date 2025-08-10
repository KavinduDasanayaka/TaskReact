/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        triadic: "#52378C",
        textdark: "#2F2F2F",
        textLight: "#545A75",
        textSubtle: "#9C9991",
        accent1: "#E2F2FE",
        accent2: "#FFF8E0",
        error: "#FF0335",
        success: "#5EB30B",
        faqcolor: "#FAF8FF"
      },
     screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1200px',
        'xl': '1440px',
      },

      fontWeight: {
        navWeight: 500,
        ultralight: 150,
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
