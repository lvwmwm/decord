// Module ID: 15815
// Function ID: 120883
// Name: _default2
// Dependencies: []

// Module 15815 (_default2)
global.IntlPolyfill = require(dependencyMap[0]).default;
const _module = require(dependencyMap[1]);
if (!global.Intl) {
  global.Intl = require(dependencyMap[0]).default;
  const result = require(dependencyMap[0]).default.__applyLocaleSensitivePrototypes();
  const _default = require(dependencyMap[0]).default;
}
const _default2 = require(dependencyMap[0]).default;
_default2.default = require(dependencyMap[0]).default;

export default _default2;
