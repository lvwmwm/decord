// Module ID: 16454
// Function ID: 16455
// Name: setupURLPolyfill
// Dependencies: [16455, 16456, 16457, 16470]
// Exports: setupURLPolyfill

// Module 16454 (setupURLPolyfill)
import _modDef16456 from "module_16456" /* 16456 */;
import URL from "URL" /* 16457 */;
import _mod16470 from "module_16470" /* 16470 */;
import react_native from "react-native" /* 16455 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16470) {
  exports[key10020] = _mod16470[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16456.name + "@" + _modDef16456.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16470.URLSearchParams;
}
