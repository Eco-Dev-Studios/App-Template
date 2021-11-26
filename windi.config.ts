import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  shortcuts: {
    'link': 'inline-block text-gray-800 dark:text-gray-50 font-bold text-sm px-2 py-1 text-center hover:underline',
    'link-active': 'underline',
  },

  plugins: [
    typography(),
  ],
  theme: {
    colors: { ...colors },
  },
})
