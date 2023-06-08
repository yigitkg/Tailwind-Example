/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        indigonight: '#1f00cc',
        linkedin: '#0077B5',
      },
      spacing: {
        '15': '3.75rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}

