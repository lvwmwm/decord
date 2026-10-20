// Module ID: 14455
// Function ID: 14456
// Name: polyfills
// Dependencies: [14456, 14552, 2]

// Module 14455 (polyfills)
import Locale from "Locale" /* 14456 */;
import polyfillsNative from "polyfillsNative" /* 14552 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
