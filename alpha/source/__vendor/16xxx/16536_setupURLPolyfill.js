// Module ID: 16536
// Function ID: 16537
// Name: setupURLPolyfill
// Dependencies: [16537, 16538, 16539, 16552]
// Exports: setupURLPolyfill

// Module 16536 (setupURLPolyfill)
import _modDef16538 from "module_16538" /* 16538 */;
import URL from "URL" /* 16539 */;
import _mod16552 from "module_16552" /* 16552 */;
import react_native from "react-native" /* 16537 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16552) {
  exports[key10020] = _mod16552[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16538.name + "@" + _modDef16538.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16552.URLSearchParams;
}
