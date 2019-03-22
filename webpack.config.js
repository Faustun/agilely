const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    'Agilely': './src/index.js',
    'Agilely.min': './src/index.js'
  },
  output: {
    library: 'Agilely',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'src'),
      query: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8']
            }
          }]
        ]
      }
    }, {
      test: require.resolve('./src/index.js'),
      loader: 'expose-loader?Agilely'
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  plugins: []
};