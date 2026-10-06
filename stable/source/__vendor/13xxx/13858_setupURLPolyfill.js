// Module ID: 13858
// Function ID: 13859
// Name: setupURLPolyfill
// Dependencies: [13859, 13860, 13861, 13874]
// Exports: setupURLPolyfill

// Module 13858 (setupURLPolyfill)
import _modDef13860 from "module_13860" /* 13860 */;
import URL from "URL" /* 13861 */;
import _mod13874 from "module_13874" /* 13874 */;
import react_native from "react-native" /* 13859 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod13874) {
  exports[key10020] = _mod13874[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef13860.name + "@" + _modDef13860.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod13874.URLSearchParams;
};
