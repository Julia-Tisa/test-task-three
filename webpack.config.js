const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  mode: 'development',
  performance: {
    maxEntrypointSize: 600000,
    maxAssetSize: 600000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'public', 'index.html'),
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src', 'public', 'index.html'),
    port: 9000,
    historyApiFallback: true,
  },
};