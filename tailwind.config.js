/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "orange-color": "#EE6A33",
        "dark-orange-color": "#ff4500",
        "black-theme": "#171717"
      },
      screens: {
        'xsm': '380px',
      },
    },
  },
  plugins: [],
}

