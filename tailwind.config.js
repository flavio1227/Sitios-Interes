/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#FFFFFF',
        'custom-yellow': '#1F2937',
      },
    },
  },
  plugins: [],
};
