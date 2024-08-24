/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        font_manrope: "Manrope, sans-serif;",
      },
      colors:{
        body_color_1: "rgb(255, 255, 255)",
        body_color_2: "rgba(255, 255, 255, 0)",
        
      }
    },
  },
  plugins: [],
}

