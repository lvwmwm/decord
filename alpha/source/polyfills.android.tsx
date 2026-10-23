// Module ID: 15419
// Function ID: 15420
// Name: polyfills
// Dependencies: [15420, 15516, 2]

// Module 15419 (polyfills)
import Locale from "Locale" /* 15420 */;
import polyfillsNative from "polyfillsNative" /* 15516 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
