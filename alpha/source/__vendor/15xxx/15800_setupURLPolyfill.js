// Module ID: 15800
// Function ID: 15801
// Name: setupURLPolyfill
// Dependencies: [15801, 15802, 15803, 15816]
// Exports: setupURLPolyfill

// Module 15800 (setupURLPolyfill)
import _modDef15802 from "module_15802" /* 15802 */;
import URL from "URL" /* 15803 */;
import _mod15816 from "module_15816" /* 15816 */;
import react_native from "react-native" /* 15801 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15816) {
  exports[key10020] = _mod15816[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15802.name + "@" + _modDef15802.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15816.URLSearchParams;
}
