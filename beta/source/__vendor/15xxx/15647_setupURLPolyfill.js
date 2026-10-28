// Module ID: 15647
// Function ID: 15648
// Name: setupURLPolyfill
// Dependencies: [15648, 15649, 15650, 15663]
// Exports: setupURLPolyfill

// Module 15647 (setupURLPolyfill)
import _modDef15649 from "module_15649" /* 15649 */;
import URL from "URL" /* 15650 */;
import _mod15663 from "module_15663" /* 15663 */;
import react_native from "react-native" /* 15648 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15663) {
  exports[key10020] = _mod15663[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15649.name + "@" + _modDef15649.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15663.URLSearchParams;
};
