// Module ID: 15604
// Function ID: 15605
// Name: setupURLPolyfill
// Dependencies: [15605, 15606, 15607, 15620]
// Exports: setupURLPolyfill

// Module 15604 (setupURLPolyfill)
import _modDef15606 from "module_15606" /* 15606 */;
import URL from "URL" /* 15607 */;
import _mod15620 from "module_15620" /* 15620 */;
import react_native from "react-native" /* 15605 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15620) {
  exports[key10020] = _mod15620[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15606.name + "@" + _modDef15606.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15620.URLSearchParams;
}
