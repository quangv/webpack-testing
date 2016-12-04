var path = require('path');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'www'),
    filename: "bundle.js"
  },
  devServer: {
    host: '0.0.0.0'
  }
};
