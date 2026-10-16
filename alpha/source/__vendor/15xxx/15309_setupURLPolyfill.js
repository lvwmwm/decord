// Module ID: 15309
// Function ID: 15310
// Name: setupURLPolyfill
// Dependencies: [15310, 15311, 15312, 15325]
// Exports: setupURLPolyfill

// Module 15309 (setupURLPolyfill)
import _modDef15311 from "module_15311" /* 15311 */;
import URL from "URL" /* 15312 */;
import _mod15325 from "module_15325" /* 15325 */;
import react_native from "react-native" /* 15310 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15325) {
  exports[key10020] = _mod15325[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15311.name + "@" + _modDef15311.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15325.URLSearchParams;
};
