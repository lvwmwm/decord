// Module ID: 14446
// Function ID: 14447
// Name: setupURLPolyfill
// Dependencies: [14447, 14448, 14449, 14462]
// Exports: setupURLPolyfill

// Module 14446 (setupURLPolyfill)
import _modDef14448 from "module_14448" /* 14448 */;
import URL from "URL" /* 14449 */;
import _mod14462 from "module_14462" /* 14462 */;
import react_native from "react-native" /* 14447 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14462) {
  exports[key10020] = _mod14462[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14448.name + "@" + _modDef14448.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14462.URLSearchParams;
};
