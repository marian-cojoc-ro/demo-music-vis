/*eslint-disable */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Get base config
var config = require('./base.config');

// Set output
config.output = {
  path: path.resolve('./dist/assets/'),
  publicPath: '/assets/',
  filename: 'bundle.js'
};

// Add style loaders
config.module.loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]__[hash:6]!postcss!sass'),
  exclude: /node_modules/
});

// Add extract text plugin
config.plugins.push(new ExtractTextPlugin('style.css', {allChunks: true}));

// Add uglify plugin
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

// Add source map
config.plugins.push(new webpack.SourceMapDevToolPlugin({
  test: /\.jsx?$/,
  filename: '[file].map'
}));

module.exports = config;
