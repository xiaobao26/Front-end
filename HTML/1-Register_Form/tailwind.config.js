/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#111827',
        'medium-blue':'#1C2432',
        'paragraph': '#858D9A',
      }
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}

