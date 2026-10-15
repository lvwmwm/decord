// Module ID: 15274
// Function ID: 15275
// Name: setupURLPolyfill
// Dependencies: [15275, 15276, 15277, 15290]
// Exports: setupURLPolyfill

// Module 15274 (setupURLPolyfill)
import _modDef15276 from "module_15276" /* 15276 */;
import URL from "URL" /* 15277 */;
import _mod15290 from "module_15290" /* 15290 */;
import react_native from "react-native" /* 15275 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15290) {
  exports[key10020] = _mod15290[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15276.name + "@" + _modDef15276.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15290.URLSearchParams;
};
