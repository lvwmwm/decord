// Module ID: 15519
// Function ID: 15520
// Name: setupURLPolyfill
// Dependencies: [15520, 15521, 15522, 15535]
// Exports: setupURLPolyfill

// Module 15519 (setupURLPolyfill)
import _modDef15521 from "module_15521" /* 15521 */;
import URL from "URL" /* 15522 */;
import _mod15535 from "module_15535" /* 15535 */;
import react_native from "react-native" /* 15520 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15535) {
  exports[key10020] = _mod15535[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15521.name + "@" + _modDef15521.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15535.URLSearchParams;
}
