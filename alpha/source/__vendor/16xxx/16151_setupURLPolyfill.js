// Module ID: 16151
// Function ID: 16152
// Name: setupURLPolyfill
// Dependencies: [16152, 16153, 16154, 16167]
// Exports: setupURLPolyfill

// Module 16151 (setupURLPolyfill)
import _modDef16153 from "module_16153" /* 16153 */;
import URL from "URL" /* 16154 */;
import _mod16167 from "module_16167" /* 16167 */;
import react_native from "react-native" /* 16152 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16167) {
  exports[key10020] = _mod16167[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16153.name + "@" + _modDef16153.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16167.URLSearchParams;
}
