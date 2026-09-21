// Module ID: 14648
// Function ID: 14649
// Name: setupURLPolyfill
// Dependencies: [14649, 14650, 14651, 14664]
// Exports: setupURLPolyfill

// Module 14648 (setupURLPolyfill)
import _modDef14650 from "module_14650" /* 14650 */;
import _mod14651 from "module_14651" /* 14651 */;
import _mod14664 from "module_14664" /* 14664 */;
import get_ActivityIndicator from "module_14649" /* 14649 */;

const require = globalThis.__r;

for (const key10016 in require("module_14651")) {
  arg5[key10016] = require("module_14651")[key10016];
  continue;
}
for (const key10020 in require("module_14664")) {
  arg5[key10020] = require("module_14664")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14650.name + "@" + _modDef14650.version;
  globalThis.URL = _mod14651.URL;
  globalThis.URLSearchParams = _mod14664.URLSearchParams;
};
