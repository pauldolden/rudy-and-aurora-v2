module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        'white-dream': 'White Dream',
        cormorant: 'Cormorant'
      },
      colors: {
        aurora: {
          base: '#FF9899',
          med: '#FFA7A6',
          light: '#FFCBC4'
        },
        rudy: {
          base: '#FFCBA5',
          light: '#FDE5B4'
        },
        dark: {
          base: '#37323E'
        }
      }
    }
  },
  plugins: []
};
