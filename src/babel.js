/**
 * Generates a basic `babel` configuration
 */
module.exports = () => ({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['macros'],
})
