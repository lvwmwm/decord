// Module ID: 14676
// Function ID: 14677
// Name: setupURLPolyfill
// Dependencies: [14677, 14678, 14679, 14692]
// Exports: setupURLPolyfill

// Module 14676 (setupURLPolyfill)
import _modDef14678 from "module_14678" /* 14678 */;
import _mod14679 from "module_14679" /* 14679 */;
import _mod14692 from "module_14692" /* 14692 */;
import get_ActivityIndicator from "module_14677" /* 14677 */;

const require = globalThis.__r;

for (const key10016 in require("module_14679")) {
  arg5[key10016] = require("module_14679")[key10016];
  continue;
}
for (const key10020 in require("module_14692")) {
  arg5[key10020] = require("module_14692")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14678.name + "@" + _modDef14678.version;
  globalThis.URL = _mod14679.URL;
  globalThis.URLSearchParams = _mod14692.URLSearchParams;
};
