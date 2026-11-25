// Module ID: 15749
// Function ID: 15750
// Name: setupURLPolyfill
// Dependencies: [15750, 15751, 15752, 15765]
// Exports: setupURLPolyfill

// Module 15749 (setupURLPolyfill)
import _modDef15751 from "module_15751" /* 15751 */;
import URL from "URL" /* 15752 */;
import _mod15765 from "module_15765" /* 15765 */;
import react_native from "react-native" /* 15750 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15765) {
  exports[key10020] = _mod15765[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15751.name + "@" + _modDef15751.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15765.URLSearchParams;
}
