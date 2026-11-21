// Module ID: 15606
// Function ID: 15607
// Name: setupURLPolyfill
// Dependencies: [15607, 15608, 15609, 15622]
// Exports: setupURLPolyfill

// Module 15606 (setupURLPolyfill)
import _modDef15608 from "module_15608" /* 15608 */;
import URL from "URL" /* 15609 */;
import _mod15622 from "module_15622" /* 15622 */;
import react_native from "react-native" /* 15607 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15622) {
  exports[key10020] = _mod15622[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15608.name + "@" + _modDef15608.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15622.URLSearchParams;
}
