// Module ID: 13978
// Function ID: 13979
// Name: polyfills
// Dependencies: [13979, 14075, 2]

// Module 13978 (polyfills)
import Locale from "Locale" /* 13979 */;
import polyfillsNative from "polyfillsNative" /* 14075 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
