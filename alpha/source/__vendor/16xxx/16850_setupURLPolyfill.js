// Module ID: 16850
// Function ID: 16851
// Name: setupURLPolyfill
// Dependencies: [16851, 16852, 16853, 16866]
// Exports: setupURLPolyfill

// Module 16850 (setupURLPolyfill)
import _modDef16852 from "module_16852" /* 16852 */;
import URL from "URL" /* 16853 */;
import _mod16866 from "module_16866" /* 16866 */;
import react_native from "react-native" /* 16851 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16866) {
  exports[key10020] = _mod16866[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16852.name + "@" + _modDef16852.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16866.URLSearchParams;
}
