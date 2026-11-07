// Module ID: 16499
// Function ID: 16500
// Name: setupURLPolyfill
// Dependencies: [16500, 16501, 16502, 16515]
// Exports: setupURLPolyfill

// Module 16499 (setupURLPolyfill)
import _modDef16501 from "module_16501" /* 16501 */;
import URL from "URL" /* 16502 */;
import _mod16515 from "module_16515" /* 16515 */;
import react_native from "react-native" /* 16500 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16515) {
  exports[key10020] = _mod16515[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16501.name + "@" + _modDef16501.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16515.URLSearchParams;
}
