// Module ID: 16285
// Function ID: 16286
// Name: polyfills
// Dependencies: [16286, 16382, 2]

// Module 16285 (polyfills)
import Locale from "Locale" /* 16286 */;
import polyfillsNative from "polyfillsNative" /* 16382 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
