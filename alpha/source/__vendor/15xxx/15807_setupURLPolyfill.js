// Module ID: 15807
// Function ID: 15808
// Name: setupURLPolyfill
// Dependencies: [15808, 15809, 15810, 15823]
// Exports: setupURLPolyfill

// Module 15807 (setupURLPolyfill)
import _modDef15809 from "module_15809" /* 15809 */;
import URL from "URL" /* 15810 */;
import _mod15823 from "module_15823" /* 15823 */;
import react_native from "react-native" /* 15808 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15823) {
  exports[key10020] = _mod15823[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15809.name + "@" + _modDef15809.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15823.URLSearchParams;
}
