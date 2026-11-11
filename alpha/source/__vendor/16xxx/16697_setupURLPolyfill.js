// Module ID: 16697
// Function ID: 16698
// Name: setupURLPolyfill
// Dependencies: [16698, 16699, 16700, 16713]
// Exports: setupURLPolyfill

// Module 16697 (setupURLPolyfill)
import _modDef16699 from "module_16699" /* 16699 */;
import URL from "URL" /* 16700 */;
import _mod16713 from "module_16713" /* 16713 */;
import react_native from "react-native" /* 16698 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16713) {
  exports[key10020] = _mod16713[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16699.name + "@" + _modDef16699.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16713.URLSearchParams;
}
