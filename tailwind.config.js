// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       'primary': '#E60023',
       'dark': '#111111',
       'light': '#EFEFEF',
       'lightHover': '#d7d7d7',
       'muted': '#717171',
        teal: colors.teal,
        blueGray: colors.blueGray,
      },
      fontSize: {
        'xxs': ['8px'],
        'xxxs': ['6px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}