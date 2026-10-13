// Module ID: 14940
// Function ID: 14941
// Name: setupURLPolyfill
// Dependencies: [14941, 14942, 14943, 14956]
// Exports: setupURLPolyfill

// Module 14940 (setupURLPolyfill)
import _modDef14942 from "module_14942" /* 14942 */;
import URL from "URL" /* 14943 */;
import _mod14956 from "module_14956" /* 14956 */;
import react_native from "react-native" /* 14941 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14956) {
  exports[key10020] = _mod14956[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14942.name + "@" + _modDef14942.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14956.URLSearchParams;
};
