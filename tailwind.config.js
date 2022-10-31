/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "app",
      },
      backgroundImage: {
        "hero-background-mobile":"radial-gradient(50% 50% at 50% 50%,#dde0fc 0,rgba(127,208,231,0) 100%)",
        "left-gradient-background":"radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)"
      },
      colors: {
        'primary': {
          900:"#3f4246",
          800:"#676767"
        },
      },
    },
  },
  plugins: [],
}