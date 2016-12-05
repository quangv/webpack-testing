var path = require('path');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'www'),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname)
  }
};
