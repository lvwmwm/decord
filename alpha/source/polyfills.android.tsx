// Module ID: 15437
// Function ID: 15438
// Name: polyfills
// Dependencies: [15438, 15534, 2]

// Module 15437 (polyfills)
import Locale from "Locale" /* 15438 */;
import polyfillsNative from "polyfillsNative" /* 15534 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
