/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * Generates a basic `webpack` configuration
 */
module.exports = () => ({
  entry: './src/index.tsx',

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: `bundle.js`,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
  },
})
