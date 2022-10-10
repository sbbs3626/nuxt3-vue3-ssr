/** @type {import('tailwindcss').Config} */
module.exports = {
  // 生产构建中对未使用的样式进行摇树优化
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
