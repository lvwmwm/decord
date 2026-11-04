// Module ID: 16196
// Function ID: 16197
// Name: setupURLPolyfill
// Dependencies: [16197, 16198, 16199, 16212]
// Exports: setupURLPolyfill

// Module 16196 (setupURLPolyfill)
import _modDef16198 from "module_16198" /* 16198 */;
import URL from "URL" /* 16199 */;
import _mod16212 from "module_16212" /* 16212 */;
import react_native from "react-native" /* 16197 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16212) {
  exports[key10020] = _mod16212[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16198.name + "@" + _modDef16198.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16212.URLSearchParams;
}
