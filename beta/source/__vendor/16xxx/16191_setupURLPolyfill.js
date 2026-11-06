// Module ID: 16191
// Function ID: 16192
// Name: setupURLPolyfill
// Dependencies: [16192, 16193, 16194, 16207]
// Exports: setupURLPolyfill

// Module 16191 (setupURLPolyfill)
import _modDef16193 from "module_16193" /* 16193 */;
import URL from "URL" /* 16194 */;
import _mod16207 from "module_16207" /* 16207 */;
import react_native from "react-native" /* 16192 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16207) {
  exports[key10020] = _mod16207[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16193.name + "@" + _modDef16193.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16207.URLSearchParams;
}
