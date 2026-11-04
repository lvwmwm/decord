// Module ID: 16428
// Function ID: 16429
// Name: setupURLPolyfill
// Dependencies: [16429, 16430, 16431, 16444]
// Exports: setupURLPolyfill

// Module 16428 (setupURLPolyfill)
import _modDef16430 from "module_16430" /* 16430 */;
import URL from "URL" /* 16431 */;
import _mod16444 from "module_16444" /* 16444 */;
import react_native from "react-native" /* 16429 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16444) {
  exports[key10020] = _mod16444[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16430.name + "@" + _modDef16430.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16444.URLSearchParams;
}
