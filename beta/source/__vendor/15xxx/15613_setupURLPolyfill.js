// Module ID: 15613
// Function ID: 15614
// Name: setupURLPolyfill
// Dependencies: [15614, 15615, 15616, 15629]
// Exports: setupURLPolyfill

// Module 15613 (setupURLPolyfill)
import _modDef15615 from "module_15615" /* 15615 */;
import URL from "URL" /* 15616 */;
import _mod15629 from "module_15629" /* 15629 */;
import react_native from "react-native" /* 15614 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15629) {
  exports[key10020] = _mod15629[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15615.name + "@" + _modDef15615.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15629.URLSearchParams;
};
