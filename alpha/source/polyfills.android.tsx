// Module ID: 16528
// Function ID: 16529
// Name: polyfills
// Dependencies: [16529, 16625, 2]

// Module 16528 (polyfills)
import Locale from "Locale" /* 16529 */;
import polyfillsNative from "polyfillsNative" /* 16625 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
