// Module ID: 16817
// Function ID: 16818
// Name: setupURLPolyfill
// Dependencies: [16818, 16819, 16820, 16833]
// Exports: setupURLPolyfill

// Module 16817 (setupURLPolyfill)
import _modDef16819 from "module_16819" /* 16819 */;
import URL from "URL" /* 16820 */;
import _mod16833 from "module_16833" /* 16833 */;
import react_native from "react-native" /* 16818 */;

for (const key10016 in URL) {
  exports[key10016] = URL[key10016];
  continue;
}
for (const key10020 in _mod16833) {
  exports[key10020] = _mod16833[key10020];
  continue;
}

export function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef16819.name + "@" + _modDef16819.version;
  globalThis.URL = URL.URL;
  globalThis.URLSearchParams = _mod16833.URLSearchParams;
}
