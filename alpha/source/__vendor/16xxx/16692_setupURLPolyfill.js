// Module ID: 16692
// Function ID: 16693
// Name: setupURLPolyfill
// Dependencies: [16693, 16694, 16695, 16708]
// Exports: setupURLPolyfill

// Module 16692 (setupURLPolyfill)
import _modDef16694 from "module_16694" /* 16694 */;
import URL from "URL" /* 16695 */;
import _mod16708 from "module_16708" /* 16708 */;
import react_native from "react-native" /* 16693 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16708) {
  exports[key10020] = _mod16708[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16694.name + "@" + _modDef16694.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16708.URLSearchParams;
}
