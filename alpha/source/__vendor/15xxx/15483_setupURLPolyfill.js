// Module ID: 15483
// Function ID: 15484
// Name: setupURLPolyfill
// Dependencies: [15484, 15485, 15486, 15499]
// Exports: setupURLPolyfill

// Module 15483 (setupURLPolyfill)
import _modDef15485 from "module_15485" /* 15485 */;
import URL from "URL" /* 15486 */;
import _mod15499 from "module_15499" /* 15499 */;
import react_native from "react-native" /* 15484 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15499) {
  exports[key10020] = _mod15499[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15485.name + "@" + _modDef15485.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15499.URLSearchParams;
}
