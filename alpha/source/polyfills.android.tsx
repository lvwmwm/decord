// Module ID: 15314
// Function ID: 15315
// Name: polyfills
// Dependencies: [15315, 15411, 2]

// Module 15314 (polyfills)
import Locale from "Locale" /* 15315 */;
import polyfillsNative from "polyfillsNative" /* 15411 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
