/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        sab: {
          primary: "#0F172A",
          secondary: "#1E293B",
          accent: "#F59E0B",
          light: "#F8FAFC",
          dark: "#020617"
        },
        ecommerce: {
          primary: "#1D4ED8",
          secondary: "#3B82F6",
          accent: "#F97316",
          light: "#EFF6FF",
          dark: "#1E3A5F"
        },
        portfolio: {
          primary: "#7C3AED",
          secondary: "#A78BFA",
          accent: "#F59E0B",
          light: "#F5F3FF",
          dark: "#2E1065"
        },
        webinar: {
          primary: "#0F766E",
          secondary: "#14B8A6",
          accent: "#6366F1",
          light: "#F0FDFA",
          dark: "#042F2E"
        },
        comingsoon: {
          primary: "#4F46E5",
          secondary: "#818CF8",
          accent: "#F59E0B",
          light: "#EEF2FF",
          dark: "#1E1B4B"
        },
        thankyou: {
          primary: "#059669",
          secondary: "#34D399",
          accent: "#F59E0B",
          light: "#ECFDF5",
          dark: "#064E3B"
        },
        notfound: {
          primary: "#DC2626",
          secondary: "#F87171",
          accent: "#F97316",
          light: "#FEF2F2",
          dark: "#450A0A"
        }
      },
      fontFamily: {
        // SAB Default
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        // E-commerce — modern, bold, commercial
        "ecommerce-heading": ["Montserrat", "sans-serif"],
        "ecommerce-body": ["Nunito Sans", "sans-serif"],
        // Portfolio — elegan, editorial, kreatif
        "portfolio-heading": ["Playfair Display", "serif"],
        "portfolio-body": ["Lato", "sans-serif"],
        // Webinar — profesional, mudah dibaca
        "webinar-heading": ["Raleway", "sans-serif"],
        "webinar-body": ["Open Sans", "sans-serif"],
        // Coming Soon — futuristik, misterius
        "comingsoon-heading": ["Exo 2", "sans-serif"],
        "comingsoon-body": ["Roboto", "sans-serif"],
        // Thank You — hangat, ramah, bersahabat
        "thankyou-heading": ["Quicksand", "sans-serif"],
        "thankyou-body": ["Nunito", "sans-serif"],
        // 404 Not Found — bold, impactful, ekspresif
        "notfound-heading": ["Bebas Neue", "cursive"],
        "notfound-body": ["Roboto Condensed", "sans-serif"]
      }
    },
  },
  plugins: [],
}