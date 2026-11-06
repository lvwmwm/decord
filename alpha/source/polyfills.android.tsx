// Module ID: 16282
// Function ID: 16283
// Name: polyfills
// Dependencies: [16283, 16379, 2]

// Module 16282 (polyfills)
import Locale from "Locale" /* 16283 */;
import polyfillsNative from "polyfillsNative" /* 16379 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
