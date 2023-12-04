/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('../img/bg.jpg')",
        'bgTop': "url('../img/wrapper-top.png')",
        'bgFooter': "url('../img/footer.png')",
        'btnOpen': "url('../img/btn-open.svg')",
        'btnClose': "url('../img/btn-close.svg')",
      },
      backgroundColor: {
        'orangeDB': "#ff6400"
      }
    },
  },
  plugins: [],
}

