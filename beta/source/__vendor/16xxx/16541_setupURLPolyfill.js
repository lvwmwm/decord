// Module ID: 16541
// Function ID: 16542
// Name: setupURLPolyfill
// Dependencies: [16542, 16543, 16544, 16557]
// Exports: setupURLPolyfill

// Module 16541 (setupURLPolyfill)
import _modDef16543 from "module_16543" /* 16543 */;
import URL from "URL" /* 16544 */;
import _mod16557 from "module_16557" /* 16557 */;
import react_native from "react-native" /* 16542 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16557) {
  exports[key10020] = _mod16557[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16543.name + "@" + _modDef16543.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16557.URLSearchParams;
}
