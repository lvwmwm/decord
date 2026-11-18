// Module ID: 15533
// Function ID: 15534
// Name: setupURLPolyfill
// Dependencies: [15534, 15535, 15536, 15549]
// Exports: setupURLPolyfill

// Module 15533 (setupURLPolyfill)
import _modDef15535 from "module_15535" /* 15535 */;
import URL from "URL" /* 15536 */;
import _mod15549 from "module_15549" /* 15549 */;
import react_native from "react-native" /* 15534 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15549) {
  exports[key10020] = _mod15549[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15535.name + "@" + _modDef15535.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15549.URLSearchParams;
}
