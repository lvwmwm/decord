// Module ID: 15364
// Function ID: 15365
// Name: polyfills
// Dependencies: [15365, 15461, 2]

// Module 15364 (polyfills)
import Locale from "Locale" /* 15365 */;
import polyfillsNative from "polyfillsNative" /* 15461 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
