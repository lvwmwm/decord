// Module ID: 16509
// Function ID: 16510
// Name: setupURLPolyfill
// Dependencies: [16510, 16511, 16512, 16525]
// Exports: setupURLPolyfill

// Module 16509 (setupURLPolyfill)
import _modDef16511 from "module_16511" /* 16511 */;
import URL from "URL" /* 16512 */;
import _mod16525 from "module_16525" /* 16525 */;
import react_native from "react-native" /* 16510 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16525) {
  exports[key10020] = _mod16525[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16511.name + "@" + _modDef16511.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16525.URLSearchParams;
}
