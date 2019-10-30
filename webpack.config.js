const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: [path.resolve(`${__dirname}/js/main.js`)]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(`${__dirname}/`)
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
};
