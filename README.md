# @pcattori/react-toolkit

Personal toolkit for React apps.

Toolkit includes:

- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [typescript](https://www.typescriptlang.org/)
- [babel](https://babeljs.io/)

...along with default configuration, extensions, and plugins for each.

---

For more on toolkits, see:

- [The Melting Pot of Javascript](https://youtu.be/G39lKaONAlA) - Dan Abramov
- [Concerning Toolkits](https://kentcdodds.com/blog/concerning-toolkits) - Kent C. Dodds

## Install

Install `@pcattori/react-toolkit` as a dev dependency:

```sh
npm install -D @pcattori/react-toolkit
```

### prettier

`.prettierrc.js`:

```js
var defaults = require('@pcattori/react-toolkit').prettier()
module.exports = {
  ...defaults,
  // overrides go here
}
```

### eslint

`.eslintrc.js`:

```js
var defaults = require('@pcattori/react-toolkit').eslint()
module.exports = {
  ...defaults,
  // overrides go here
}
```

### typescript

`tsconfig.json`:

```json
{
  "extends": "./node_modules/@pcattori/react-toolkit/src/tsconfig.json",
  "include": ["./src/**/*"]
}
```

### babel

`.babelrc.js`:

```js
var defaults = require('@pcattori/react-toolkit').babel()
module.exports = {
  ...defaults,
  // overrides go here
}
```

For more, including how to provide overrides, see the [tsconfig documentation](https://www.typescriptlang.org/tsconfig#extends).

## NPM scripts

Add any of the following to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --check .",
    "format:fix": "prettier --write .",
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "typecheck": "tsc --noEmit"
  }
}
```
