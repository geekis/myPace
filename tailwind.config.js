module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
      },
      maxHeight: {
        'full-wh': 'calc(100vh - 150px)',
      },
      colors: {
        pa: {
          50:  'rgba(0, 93, 122, 0.1)',
          100: 'rgba(0, 93, 122, 0.2)',
          200: 'rgba(0, 93, 122, 0.3)', 
          300: 'rgba(0, 93, 122, 0.4)',
          400: 'rgba(0, 93, 122, 0.5)',
          500: 'rgba(0, 93, 122, 0.6)',
          600: 'rgba(0, 93, 122, 0.7)',
          700: 'rgba(0, 93, 122, 0.8)',
          800: 'rgba(0, 93, 122, 0.9)',
          900: '#005D7A'
        
        },
        p: {
          900: '#16B7D0'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}