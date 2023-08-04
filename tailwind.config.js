/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#24053E',
        eucap: '#44FFA1',
        'davy-grey': '#584D62',
        'ghost-white': '#FCF8FF',
      },
      fontFamily: {
        primary: ['Fraunces', 'serif'],
        secondary: 'manrope',
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
};
