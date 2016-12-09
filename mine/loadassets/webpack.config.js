var path = require('path');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.join(__dirname, 'www'),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        loaders: ["html-loader"]
      },
      {
        test: /\.jpeg$/,
        loaders: ["file-loader"]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname)
  }
};
