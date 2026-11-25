// Module ID: 15614
// Function ID: 15615
// Name: setupURLPolyfill
// Dependencies: [15615, 15616, 15617, 15630]
// Exports: setupURLPolyfill

// Module 15614 (setupURLPolyfill)
import _modDef15616 from "module_15616" /* 15616 */;
import URL from "URL" /* 15617 */;
import _mod15630 from "module_15630" /* 15630 */;
import react_native from "react-native" /* 15615 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15630) {
  exports[key10020] = _mod15630[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15616.name + "@" + _modDef15616.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15630.URLSearchParams;
}
