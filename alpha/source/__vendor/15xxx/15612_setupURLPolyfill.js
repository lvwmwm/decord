// Module ID: 15612
// Function ID: 15613
// Name: setupURLPolyfill
// Dependencies: [15613, 15614, 15615, 15628]
// Exports: setupURLPolyfill

// Module 15612 (setupURLPolyfill)
import _modDef15614 from "module_15614" /* 15614 */;
import URL from "URL" /* 15615 */;
import _mod15628 from "module_15628" /* 15628 */;
import react_native from "react-native" /* 15613 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15628) {
  exports[key10020] = _mod15628[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15614.name + "@" + _modDef15614.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15628.URLSearchParams;
};
