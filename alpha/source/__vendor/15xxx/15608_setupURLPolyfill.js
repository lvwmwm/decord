// Module ID: 15608
// Function ID: 15609
// Name: setupURLPolyfill
// Dependencies: [15609, 15610, 15611, 15624]
// Exports: setupURLPolyfill

// Module 15608 (setupURLPolyfill)
import _modDef15610 from "module_15610" /* 15610 */;
import URL from "URL" /* 15611 */;
import _mod15624 from "module_15624" /* 15624 */;
import react_native from "react-native" /* 15609 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15624) {
  exports[key10020] = _mod15624[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15610.name + "@" + _modDef15610.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15624.URLSearchParams;
};
