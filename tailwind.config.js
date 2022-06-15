/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                zblue: '#254252',
                zpurple: '#171C2D',
                zorange: '#E37239',
                zgold: '#F9982F',
                ztan: '#EAB56F'
            },
            fontFamily: {
                'DM-Serif': ['DM Serif', 'serif'],
                'Fascinate': ['Fascinate Inline', 'san serif'],
                'Sriracha': ['Sriracha'],
                'Chango': ['Chango']
            },
            keyframes: {
                'wiggle': {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)' },
                    '50%': { transform: 'translateY(-100%)' },
                    '90%': { transform: 'translateY(10%)' },
                    '94%': { transform: 'translateY(10%)' },
                    '100%': { transform: 'translateY(0%)' }
                }
            },
            animation: {
                'wiggle': 'wiggle 3s ease-in-out infinite',
                'slide-down': 'slide-down 1s ease-in-out'
            }
        },
    },
    plugins: [],
}
