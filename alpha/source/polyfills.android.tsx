// Module ID: 15398
// Function ID: 15399
// Name: polyfills
// Dependencies: [15399, 15495, 2]

// Module 15398 (polyfills)
import Locale from "Locale" /* 15399 */;
import polyfillsNative from "polyfillsNative" /* 15495 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
