// Module ID: 15392
// Function ID: 15393
// Name: setupURLPolyfill
// Dependencies: [15393, 15394, 15395, 15408]
// Exports: setupURLPolyfill

// Module 15392 (setupURLPolyfill)
import _modDef15394 from "module_15394" /* 15394 */;
import URL from "URL" /* 15395 */;
import _mod15408 from "module_15408" /* 15408 */;
import react_native from "react-native" /* 15393 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod15408) {
  exports[key10020] = _mod15408[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef15394.name + "@" + _modDef15394.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod15408.URLSearchParams;
};
