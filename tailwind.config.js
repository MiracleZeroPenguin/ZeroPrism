/*
 * @description: tailwind配置
 * @author: Jack Chen @懒人码农
 * @Date: 2024-03-05 20:30:07
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-03-05 23:20:29
 */
// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#cce3f0',  // 最浅色
          200: '#99c7e2',
          300: '#66aad3',
          400: '#4999c1',  // 原始颜色稍浅
          500: '#0099c1',  // 您原来的主色调
          600: '#3a7a9a',
          700: '#2b5c73',
          800: '#1d3d4d',
          900: '#0e1f26',  // 最深色
        },
        accent: {
          100: '#fef0d6',  // 最浅色
          200: '#fde2ad',
          300: '#fbd385',
          400: '#fac55c',
          500: '#f9c54e',  // 您原来的强调色
          600: '#c79e3e',
          700: '#95772f',
          800: '#644f1f',
          900: '#322810',  // 最深色
        },
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              color: theme('colors.primary.700'),
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.accent.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
