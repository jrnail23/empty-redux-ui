const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  devTool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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
    // ,new webpack.HotModuleReplacementPlugin()
  ]
}
