// Module ID: 234
// Function ID: 3239
// Name: polyfillObjectProperty
// Dependencies: [126]

// Module 234 (polyfillObjectProperty)
const _navigator = global.navigator;
if (undefined === _navigator) {
  const obj = { product: "ReactNative" };
  global.navigator = obj;
} else {
  const _module = require("polyfillObjectProperty");
  const result = _module.polyfillObjectProperty(_navigator, "product", () => "ReactNative");
}
