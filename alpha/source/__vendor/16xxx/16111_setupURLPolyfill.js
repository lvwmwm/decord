// Module ID: 16111
// Function ID: 16112
// Name: setupURLPolyfill
// Dependencies: [16112, 16113, 16114, 16127]
// Exports: setupURLPolyfill

// Module 16111 (setupURLPolyfill)
import _modDef16113 from "module_16113" /* 16113 */;
import URL from "URL" /* 16114 */;
import _mod16127 from "module_16127" /* 16127 */;
import react_native from "react-native" /* 16112 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16127) {
  exports[key10020] = _mod16127[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16113.name + "@" + _modDef16113.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16127.URLSearchParams;
}
