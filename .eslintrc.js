/* eslint-disable @typescript-eslint/no-var-requires */
const defaults = require('./src').eslint()

module.exports = {
  ...defaults,
  // unset react-specific linting configuration
  settings: undefined,
  extends: defaults.extends.filter(e => e !== 'plugin:react/recommended'),
}
