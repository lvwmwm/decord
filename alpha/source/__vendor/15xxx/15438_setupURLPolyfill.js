// Module ID: 15438
// Function ID: 15439
// Name: setupURLPolyfill
// Dependencies: [15439, 15440, 15441, 15454]
// Exports: setupURLPolyfill

// Module 15438 (setupURLPolyfill)
import _modDef15440 from "module_15440" /* 15440 */;
import URL from "URL" /* 15441 */;
import _mod15454 from "module_15454" /* 15454 */;
import react_native from "react-native" /* 15439 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15454) {
  exports[key10020] = _mod15454[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15440.name + "@" + _modDef15440.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15454.URLSearchParams;
};
