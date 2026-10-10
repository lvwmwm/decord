// Module ID: 14427
// Function ID: 14428
// Name: polyfills
// Dependencies: [14428, 14524, 2]

// Module 14427 (polyfills)
import Locale from "Locale" /* 14428 */;
import polyfillsNative from "polyfillsNative" /* 14524 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
