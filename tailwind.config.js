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
        }
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}