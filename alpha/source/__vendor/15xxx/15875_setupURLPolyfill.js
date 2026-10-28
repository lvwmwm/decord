// Module ID: 15875
// Function ID: 15876
// Name: setupURLPolyfill
// Dependencies: [15876, 15877, 15878, 15891]
// Exports: setupURLPolyfill

// Module 15875 (setupURLPolyfill)
import _modDef15877 from "module_15877" /* 15877 */;
import URL from "URL" /* 15878 */;
import _mod15891 from "module_15891" /* 15891 */;
import react_native from "react-native" /* 15876 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15891) {
  exports[key10020] = _mod15891[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15877.name + "@" + _modDef15877.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15891.URLSearchParams;
};
