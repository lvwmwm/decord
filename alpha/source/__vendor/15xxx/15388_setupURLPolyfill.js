// Module ID: 15388
// Function ID: 15389
// Name: setupURLPolyfill
// Dependencies: [15389, 15390, 15391, 15404]
// Exports: setupURLPolyfill

// Module 15388 (setupURLPolyfill)
import _modDef15390 from "module_15390" /* 15390 */;
import URL from "URL" /* 15391 */;
import _mod15404 from "module_15404" /* 15404 */;
import react_native from "react-native" /* 15389 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15404) {
  exports[key10020] = _mod15404[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15390.name + "@" + _modDef15390.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15404.URLSearchParams;
};
