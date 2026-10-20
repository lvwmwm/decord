// Module ID: 15420
// Function ID: 15421
// Name: setupURLPolyfill
// Dependencies: [15421, 15422, 15423, 15436]
// Exports: setupURLPolyfill

// Module 15420 (setupURLPolyfill)
import _modDef15422 from "module_15422" /* 15422 */;
import URL from "URL" /* 15423 */;
import _mod15436 from "module_15436" /* 15436 */;
import react_native from "react-native" /* 15421 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15436) {
  exports[key10020] = _mod15436[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15422.name + "@" + _modDef15422.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15436.URLSearchParams;
};
