module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                body: "var(--color-body)",
                background: "var(--color-background)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
