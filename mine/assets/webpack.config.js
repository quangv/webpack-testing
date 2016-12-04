var path = require('path');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'www'),
    filename: "bundle.js"
  }
};
