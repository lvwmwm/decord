// Module ID: 16369
// Function ID: 16370
// Name: polyfills
// Dependencies: [16370, 16466, 2]

// Module 16369 (polyfills)
import Locale from "Locale" /* 16370 */;
import polyfillsNative from "polyfillsNative" /* 16466 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
