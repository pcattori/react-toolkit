# @pcattori/react-toolkit

Personal toolkit for React apps.

Toolkit includes:

- [prettier](https://prettier.io/)

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
