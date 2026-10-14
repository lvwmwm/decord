// Module ID: 14978
// Function ID: 14979
// Name: setupURLPolyfill
// Dependencies: [14979, 14980, 14981, 14994]
// Exports: setupURLPolyfill

// Module 14978 (setupURLPolyfill)
import _modDef14980 from "module_14980" /* 14980 */;
import URL from "URL" /* 14981 */;
import _mod14994 from "module_14994" /* 14994 */;
import react_native from "react-native" /* 14979 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14994) {
  exports[key10020] = _mod14994[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14980.name + "@" + _modDef14980.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14994.URLSearchParams;
};
