// Module ID: 15649
// Function ID: 15650
// Name: setupURLPolyfill
// Dependencies: [15650, 15651, 15652, 15665]
// Exports: setupURLPolyfill

// Module 15649 (setupURLPolyfill)
import _modDef15651 from "module_15651" /* 15651 */;
import URL from "URL" /* 15652 */;
import _mod15665 from "module_15665" /* 15665 */;
import react_native from "react-native" /* 15650 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15665) {
  exports[key10020] = _mod15665[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15651.name + "@" + _modDef15651.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15665.URLSearchParams;
};
