/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#84cc16'
      }
    },
    fontFamily: {
      'logo':["Kaushan Script"],
      'primary': ["Monsterrat", 'sans-serif'],
      'secondary':["Abel", 'sans-serif']
    },
    
  },
  plugins: [],
}