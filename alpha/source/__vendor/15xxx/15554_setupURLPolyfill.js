// Module ID: 15554
// Function ID: 15555
// Name: setupURLPolyfill
// Dependencies: [15555, 15556, 15557, 15570]
// Exports: setupURLPolyfill

// Module 15554 (setupURLPolyfill)
import _modDef15556 from "module_15556" /* 15556 */;
import URL from "URL" /* 15557 */;
import _mod15570 from "module_15570" /* 15570 */;
import react_native from "react-native" /* 15555 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15570) {
  exports[key10020] = _mod15570[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15556.name + "@" + _modDef15556.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15570.URLSearchParams;
};
