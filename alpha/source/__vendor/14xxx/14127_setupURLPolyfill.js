// Module ID: 14127
// Function ID: 14128
// Name: setupURLPolyfill
// Dependencies: [14128, 14129, 14130, 14143]
// Exports: setupURLPolyfill

// Module 14127 (setupURLPolyfill)
import _modDef14129 from "module_14129" /* 14129 */;
import URL from "URL" /* 14130 */;
import _mod14143 from "module_14143" /* 14143 */;
import react_native from "react-native" /* 14128 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14143) {
  exports[key10020] = _mod14143[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14129.name + "@" + _modDef14129.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14143.URLSearchParams;
};
