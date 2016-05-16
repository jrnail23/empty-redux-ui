const webpack = require('webpack')

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devTool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
