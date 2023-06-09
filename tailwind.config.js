/** @type {import('tailwindcss').Config} */
const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

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
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const calcUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - ${value})`
          }
        }
      })

      addUtilities(calcUtilities, {
        variants: ['responsive', 'hover'],
      })
    })
  ],
}

