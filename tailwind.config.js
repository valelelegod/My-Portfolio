/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        extend: {},
        container: {
            screens: {
                sm: '350px',
                md: '600px',
                lg: '800px',
                xl: '900px',
                '2xl': '1280px',
            },
        },
    },
    plugins: [],
}
