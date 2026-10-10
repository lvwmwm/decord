// Module ID: 14596
// Function ID: 14597
// Name: setupURLPolyfill
// Dependencies: [14597, 14598, 14599, 14612]
// Exports: setupURLPolyfill

// Module 14596 (setupURLPolyfill)
import _modDef14598 from "module_14598" /* 14598 */;
import URL from "URL" /* 14599 */;
import _mod14612 from "module_14612" /* 14612 */;
import react_native from "react-native" /* 14597 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14612) {
  exports[key10020] = _mod14612[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14598.name + "@" + _modDef14598.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14612.URLSearchParams;
};
