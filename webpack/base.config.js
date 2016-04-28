/*eslint-disable */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: [
    './src/scripts/index.js'
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html',
      inject: 'body'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(ttf|eot|woff2?)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]'
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },

  postcss: function () {
    return [require('autoprefixer')];
  },

  resolve: {
    alias: {
      app: path.resolve('src/scripts/app')
    },
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  }
};
