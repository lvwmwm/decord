// Module ID: 16339
// Function ID: 16340
// Name: setupURLPolyfill
// Dependencies: [16340, 16341, 16342, 16355]
// Exports: setupURLPolyfill

// Module 16339 (setupURLPolyfill)
import _modDef16341 from "module_16341" /* 16341 */;
import URL from "URL" /* 16342 */;
import _mod16355 from "module_16355" /* 16355 */;
import react_native from "react-native" /* 16340 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16355) {
  exports[key10020] = _mod16355[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16341.name + "@" + _modDef16341.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16355.URLSearchParams;
}
