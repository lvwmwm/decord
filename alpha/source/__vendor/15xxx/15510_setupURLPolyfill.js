// Module ID: 15510
// Function ID: 15511
// Name: setupURLPolyfill
// Dependencies: [15511, 15512, 15513, 15526]
// Exports: setupURLPolyfill

// Module 15510 (setupURLPolyfill)
import _modDef15512 from "module_15512" /* 15512 */;
import URL from "URL" /* 15513 */;
import _mod15526 from "module_15526" /* 15526 */;
import react_native from "react-native" /* 15511 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15526) {
  exports[key10020] = _mod15526[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15512.name + "@" + _modDef15512.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15526.URLSearchParams;
};
