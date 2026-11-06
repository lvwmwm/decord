// Module ID: 16451
// Function ID: 16452
// Name: setupURLPolyfill
// Dependencies: [16452, 16453, 16454, 16467]
// Exports: setupURLPolyfill

// Module 16451 (setupURLPolyfill)
import _modDef16453 from "module_16453" /* 16453 */;
import URL from "URL" /* 16454 */;
import _mod16467 from "module_16467" /* 16467 */;
import react_native from "react-native" /* 16452 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16467) {
  exports[key10020] = _mod16467[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16453.name + "@" + _modDef16453.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16467.URLSearchParams;
}
