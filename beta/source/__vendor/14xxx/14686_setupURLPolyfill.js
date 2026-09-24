// Module ID: 14686
// Function ID: 14687
// Name: setupURLPolyfill
// Dependencies: [14687, 14688, 14689, 14702]
// Exports: setupURLPolyfill

// Module 14686 (setupURLPolyfill)
import _modDef14688 from "module_14688" /* 14688 */;
import _mod14689 from "module_14689" /* 14689 */;
import _mod14702 from "module_14702" /* 14702 */;
import get_ActivityIndicator from "module_14687" /* 14687 */;

const require = globalThis.__r;

for (const key10016 in require("module_14689")) {
  arg5[key10016] = require("module_14689")[key10016];
  continue;
}
for (const key10020 in require("module_14702")) {
  arg5[key10020] = require("module_14702")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14688.name + "@" + _modDef14688.version;
  globalThis.URL = _mod14689.URL;
  globalThis.URLSearchParams = _mod14702.URLSearchParams;
};
