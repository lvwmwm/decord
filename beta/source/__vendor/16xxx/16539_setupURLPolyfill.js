// Module ID: 16539
// Function ID: 16540
// Name: setupURLPolyfill
// Dependencies: [16540, 16541, 16542, 16555]
// Exports: setupURLPolyfill

// Module 16539 (setupURLPolyfill)
import _modDef16541 from "module_16541" /* 16541 */;
import URL from "URL" /* 16542 */;
import _mod16555 from "module_16555" /* 16555 */;
import react_native from "react-native" /* 16540 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16555) {
  exports[key10020] = _mod16555[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16541.name + "@" + _modDef16541.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16555.URLSearchParams;
}
