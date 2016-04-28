/*eslint-disable */

var path = require('path');
var webpack = require('webpack');

// Get base config
var config = require('./base.config');

// use `source-map` to have the sourcemaps updated in dev-tools
config.devtool = 'eval-source-map';

// Add dev server entries
config.entry.unshift('webpack/hot/only-dev-server'); // hmr
config.entry.unshift('webpack-dev-server/client');   // server

// Set output
config.output = {
  path: path.resolve('./dist'),
  publicPath: '/',
  filename: 'bundle.js'
};

// Add webpack-dev-server options
config.devServer = {
  publicPath: '/',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  port: 8000,
  host: '0.0.0.0',
  hot: true,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../dist')
};

// Add HMR
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// Prevent compilation errors from reloading the page
config.plugins.push(new webpack.NoErrorsPlugin());

// Add style loaders
config.module.loaders.push({
  test: /\.scss$/,
  loader: 'style!css?modules&importLoaders=2&localIdentName=[local]__[hash:6]!postcss!sass',
  exclude: /node_modules/
});

module.exports = config;
