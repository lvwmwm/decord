// Module ID: 13856
// Function ID: 13857
// Name: setupURLPolyfill
// Dependencies: [13857, 13858, 13859, 13872]
// Exports: setupURLPolyfill

// Module 13856 (setupURLPolyfill)
import _modDef13858 from "module_13858" /* 13858 */;
import URL from "URL" /* 13859 */;
import _mod13872 from "module_13872" /* 13872 */;
import react_native from "react-native" /* 13857 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod13872) {
  exports[key10020] = _mod13872[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13858.name + "@" + _modDef13858.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod13872.URLSearchParams;
};
