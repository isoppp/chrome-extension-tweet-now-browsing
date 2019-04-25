const path = require('path')

module.exports = {
  entry: {
    bookmarklet: path.resolve(__dirname, './src/bookmarklet/bookmarklet.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/bookmarklet'),
  },
}
