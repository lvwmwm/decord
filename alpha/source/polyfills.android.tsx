// Module ID: 15341
// Function ID: 15342
// Name: polyfills
// Dependencies: [15342, 15438, 2]

// Module 15341 (polyfills)
import Locale from "Locale" /* 15342 */;
import polyfillsNative from "polyfillsNative" /* 15438 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
