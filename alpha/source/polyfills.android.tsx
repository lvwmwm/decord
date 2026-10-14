// Module ID: 14809
// Function ID: 14810
// Name: polyfills
// Dependencies: [14810, 14906, 2]

// Module 14809 (polyfills)
import Locale from "Locale" /* 14810 */;
import polyfillsNative from "polyfillsNative" /* 14906 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
