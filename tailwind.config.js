/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        font_manrope: "Manrope, sans-serif;",
      },
      colors:{
        color1:"#ABEF5F",
        color2:"#ABEF5F80",
        srce_color:"rgb(233, 233, 233)",
        bk_color:"rgb(30, 30, 30);",
        ywollo:"rgb(231, 193, 211)"
        
        
        
      },
      backgroundImage: {
        'image_1': "url('./assets/bg.jpg')",
        
      }
      
  },
  plugins: [],
}
}

