
var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ContextReplacementPlugin = webpack.ContextReplacementPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

var METADATA = {
  title: 'Angular 2 Harambe',
  baseUrl: '/'
};

var config = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendors': './src/vendors.ts',
    'app': './src/main.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/node_modules\/(?!(ng2-.+))/]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'src/app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader']})
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/app'),
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: path.join(__dirname, 'src/index')
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendors', 'polyfills']
    }),
    // https://github.com/angular/angular/issues/11580
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, 'src'),
      {} // a map of your routes 
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: METADATA.title,
      chunksSortMode: 'dependency',
      metadata: METADATA
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css'
    })
  ]
};

module.exports = config;
