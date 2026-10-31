// Module ID: 16192
// Function ID: 16193
// Name: setupURLPolyfill
// Dependencies: [16193, 16194, 16195, 16208]
// Exports: setupURLPolyfill

// Module 16192 (setupURLPolyfill)
import _modDef16194 from "module_16194" /* 16194 */;
import URL from "URL" /* 16195 */;
import _mod16208 from "module_16208" /* 16208 */;
import react_native from "react-native" /* 16193 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16208) {
  exports[key10020] = _mod16208[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16194.name + "@" + _modDef16194.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16208.URLSearchParams;
}
