// Module ID: 15319
// Function ID: 15320
// Name: setupURLPolyfill
// Dependencies: [15320, 15321, 15322, 15335]
// Exports: setupURLPolyfill

// Module 15319 (setupURLPolyfill)
import _modDef15321 from "module_15321" /* 15321 */;
import URL from "URL" /* 15322 */;
import _mod15335 from "module_15335" /* 15335 */;
import react_native from "react-native" /* 15320 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15335) {
  exports[key10020] = _mod15335[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15321.name + "@" + _modDef15321.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15335.URLSearchParams;
};
