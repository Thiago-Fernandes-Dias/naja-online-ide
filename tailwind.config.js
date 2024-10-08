module.exports = {
  prefix: '',
  mode: 'jit',
  content: ['./src/**/*.{html,ts,css,scss,sass,less,styl}'],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
