// Module ID: 16815
// Function ID: 16816
// Name: setupURLPolyfill
// Dependencies: [16816, 16817, 16818, 16831]
// Exports: setupURLPolyfill

// Module 16815 (setupURLPolyfill)
import _modDef16817 from "module_16817" /* 16817 */;
import URL from "URL" /* 16818 */;
import _mod16831 from "module_16831" /* 16831 */;
import react_native from "react-native" /* 16816 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16831) {
  exports[key10020] = _mod16831[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16817.name + "@" + _modDef16817.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16831.URLSearchParams;
}
