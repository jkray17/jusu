/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    // './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    // screens: {
    //   'sm': {'max': '480px'},
    //   'md': {'max': '768px'},
    //   'lg': {'max': '992px'},
    // },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true
    },
    extend: {
      // непонятно не работает, разобраться
      // shadow: {
      //   '1': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      //   '2': '0 35px 60px -15px rgba(0, 255, 0, 0.6)',
      // },
      colors: {
        'dolphinyellow': '#ffdc39',
        'magnmain': 'rgba(75,0,130,0.8)',
        'dmain': '#ffffff99',
        'dbgmain': '#1c1d22',
        'lmain': '#1c1d22',
        'lbgmain': '#ffffff99',
        // hilo color schema
        // 'lbgmain': '#ffa726',
        // текст,
        // Заголовок/неадер,
        // основной бэкграунд,
      }
    },
  },
  plugins: [
    // require('flowbite/plugin'),
    // require('@tailwindcss/forms'),
  ],
}
