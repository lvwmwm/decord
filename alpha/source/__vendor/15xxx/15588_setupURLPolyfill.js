// Module ID: 15588
// Function ID: 15589
// Name: setupURLPolyfill
// Dependencies: [15589, 15590, 15591, 15604]
// Exports: setupURLPolyfill

// Module 15588 (setupURLPolyfill)
import _modDef15590 from "module_15590" /* 15590 */;
import URL from "URL" /* 15591 */;
import _mod15604 from "module_15604" /* 15604 */;
import react_native from "react-native" /* 15589 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15604) {
  exports[key10020] = _mod15604[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15590.name + "@" + _modDef15590.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15604.URLSearchParams;
};
