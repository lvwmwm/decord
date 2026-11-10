// Module ID: 16367
// Function ID: 16368
// Name: polyfills
// Dependencies: [16368, 16464, 2]

// Module 16367 (polyfills)
import Locale from "Locale" /* 16368 */;
import polyfillsNative from "polyfillsNative" /* 16464 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
