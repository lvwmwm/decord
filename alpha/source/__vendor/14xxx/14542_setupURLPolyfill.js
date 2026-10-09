// Module ID: 14542
// Function ID: 14543
// Name: setupURLPolyfill
// Dependencies: [14543, 14544, 14545, 14558]
// Exports: setupURLPolyfill

// Module 14542 (setupURLPolyfill)
import _modDef14544 from "module_14544" /* 14544 */;
import URL from "URL" /* 14545 */;
import _mod14558 from "module_14558" /* 14558 */;
import react_native from "react-native" /* 14543 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14558) {
  exports[key10020] = _mod14558[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14544.name + "@" + _modDef14544.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14558.URLSearchParams;
};
