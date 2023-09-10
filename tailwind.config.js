/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fac031",
        secondaryColor: "#002244"
      },
      backgroundImage: {
        'food-image': "url('images/bg1.jpg')",
        "burger-image": "url('images/bg2.jpg')"
      },
      maxWidth: {
        'xxs': '75px',
        '8xl': '1300px'
      },
      width: {
        '75': '280px'
      },
      boxShadow: {
        '4side': '5px 5px 20px rgba(0, 0, 0, 0.2)',
        'round': '0 0 8px rgba(0,0,0,0.5)'
      },
      keyframes: {
        'movable': {
          '0%': { transform: 'translate(-11px, 0)' },
          '50%': { transform: 'translate(0, -11px)' },
          '100%': { transform: 'translate(-11px, 0)' },
        }
      },
      animation: {
        'movable': 'movable  2s linear infinite'
      },
      borderRadius: {
        'half': '50%'
      },
    },
  },
  plugins: [],
}

