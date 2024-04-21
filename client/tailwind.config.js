/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main' : '#C2E100',
      'dark' : '#2B2B2B',
      'dark2' : '#363636',
      'dark3' : '#434343',
      'light' : '#F5F5F5',
      'light2' : '#D6D6D6',
    },
    extend: {
      spacing: {
        '350' : '350px',
        '170' : '170px',
      }
    },
  },
  plugins: [],
}
