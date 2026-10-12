// Module ID: 14619
// Function ID: 14620
// Name: setupURLPolyfill
// Dependencies: [14620, 14621, 14622, 14635]
// Exports: setupURLPolyfill

// Module 14619 (setupURLPolyfill)
import _modDef14621 from "module_14621" /* 14621 */;
import URL from "URL" /* 14622 */;
import _mod14635 from "module_14635" /* 14635 */;
import react_native from "react-native" /* 14620 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14635) {
  exports[key10020] = _mod14635[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14621.name + "@" + _modDef14621.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14635.URLSearchParams;
};
