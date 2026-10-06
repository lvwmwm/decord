// Module ID: 174
// Function ID: 175
// Name: defineLazyObjectProperty
// Dependencies: [123, 175]

// Module 174 (defineLazyObjectProperty)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;

const require = globalThis.__r;

let hasPromiseResult;
if (global != null) {
  const _HermesInternal = global.HermesInternal;
  if (_HermesInternal != null) {
    if (_HermesInternal.hasPromise != null) {
      hasPromiseResult = hasPromise();
    }
  }
}
if (!hasPromiseResult) {
  const _module = defineLazyObjectProperty;
  _module.polyfillGlobal("Promise", () => require("module_175").default);
}
