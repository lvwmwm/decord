// Module ID: 15631
// Function ID: 15632
// Name: polyfills
// Dependencies: [15632, 15728, 2]

// Module 15631 (polyfills)
import Locale from "Locale" /* 15632 */;
import polyfillsNative from "polyfillsNative" /* 15728 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
