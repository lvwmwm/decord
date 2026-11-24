// Module ID: 15627
// Function ID: 15628
// Name: setupURLPolyfill
// Dependencies: [15628, 15629, 15630, 15643]
// Exports: setupURLPolyfill

// Module 15627 (setupURLPolyfill)
import _modDef15629 from "module_15629" /* 15629 */;
import URL from "URL" /* 15630 */;
import _mod15643 from "module_15643" /* 15643 */;
import react_native from "react-native" /* 15628 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15643) {
  exports[key10020] = _mod15643[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15629.name + "@" + _modDef15629.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15643.URLSearchParams;
}
