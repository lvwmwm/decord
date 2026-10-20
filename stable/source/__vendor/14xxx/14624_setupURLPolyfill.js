// Module ID: 14624
// Function ID: 14625
// Name: setupURLPolyfill
// Dependencies: [14625, 14626, 14627, 14640]
// Exports: setupURLPolyfill

// Module 14624 (setupURLPolyfill)
import _modDef14626 from "module_14626" /* 14626 */;
import URL from "URL" /* 14627 */;
import _mod14640 from "module_14640" /* 14640 */;
import react_native from "react-native" /* 14625 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod14640) {
  exports[key10020] = _mod14640[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14626.name + "@" + _modDef14626.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod14640.URLSearchParams;
};
