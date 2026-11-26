// Module ID: 15618
// Function ID: 15619
// Name: setupURLPolyfill
// Dependencies: [15619, 15620, 15621, 15634]
// Exports: setupURLPolyfill

// Module 15618 (setupURLPolyfill)
import _modDef15620 from "module_15620" /* 15620 */;
import URL from "URL" /* 15621 */;
import _mod15634 from "module_15634" /* 15634 */;
import react_native from "react-native" /* 15619 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15634) {
  exports[key10020] = _mod15634[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15620.name + "@" + _modDef15620.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15634.URLSearchParams;
}
