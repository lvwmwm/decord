// Module ID: 16441
// Function ID: 16442
// Name: setupURLPolyfill
// Dependencies: [16442, 16443, 16444, 16457]
// Exports: setupURLPolyfill

// Module 16441 (setupURLPolyfill)
import _modDef16443 from "module_16443" /* 16443 */;
import URL from "URL" /* 16444 */;
import _mod16457 from "module_16457" /* 16457 */;
import react_native from "react-native" /* 16442 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16457) {
  exports[key10020] = _mod16457[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16443.name + "@" + _modDef16443.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16457.URLSearchParams;
}
