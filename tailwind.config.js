module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        red: {
          100: '#ff758f',
          200: '#ff617b',
          300: '#ff4d67',
          400: '#ff3953',
          500: '#fc253f',
          600: '#E8112B',
          700: '#d40017',
          800: '#c00003',
          900: '#ac0000',
        }
      },
      outline: {
        orange: '2px solid #975A16'
      }
    }
  },
  variants: {},
  plugins: []
}
