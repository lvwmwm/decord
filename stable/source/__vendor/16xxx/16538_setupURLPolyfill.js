// Module ID: 16538
// Function ID: 16539
// Name: setupURLPolyfill
// Dependencies: [16539, 16540, 16541, 16554]
// Exports: setupURLPolyfill

// Module 16538 (setupURLPolyfill)
import _modDef16540 from "module_16540" /* 16540 */;
import URL from "URL" /* 16541 */;
import _mod16554 from "module_16554" /* 16554 */;
import react_native from "react-native" /* 16539 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16554) {
  exports[key10020] = _mod16554[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16540.name + "@" + _modDef16540.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16554.URLSearchParams;
}
