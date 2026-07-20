// Module ID: 234
// Function ID: 3239
// Dependencies: []

// Module 234
const _navigator = global.navigator;
if (undefined === _navigator) {
  const obj = { product: "ReactNative" };
  global.navigator = obj;
} else {
  const _module = require(dependencyMap[0]);
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}
