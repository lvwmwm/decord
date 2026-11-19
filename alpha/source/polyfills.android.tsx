// Module ID: 15350
// Function ID: 15351
// Name: polyfills
// Dependencies: [15351, 15447, 2]

// Module 15350 (polyfills)
import Locale from "Locale" /* 15351 */;
import polyfillsNative from "polyfillsNative" /* 15447 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
