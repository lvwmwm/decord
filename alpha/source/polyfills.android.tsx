// Module ID: 16272
// Function ID: 16273
// Name: polyfills
// Dependencies: [16273, 16369, 2]

// Module 16272 (polyfills)
import Locale from "Locale" /* 16273 */;
import polyfillsNative from "polyfillsNative" /* 16369 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
