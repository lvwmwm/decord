// Module ID: 15567
// Function ID: 15568
// Name: setupURLPolyfill
// Dependencies: [15568, 15569, 15570, 15583]
// Exports: setupURLPolyfill

// Module 15567 (setupURLPolyfill)
import _modDef15569 from "module_15569" /* 15569 */;
import URL from "URL" /* 15570 */;
import _mod15583 from "module_15583" /* 15583 */;
import react_native from "react-native" /* 15568 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15583) {
  exports[key10020] = _mod15583[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15569.name + "@" + _modDef15569.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15583.URLSearchParams;
};
