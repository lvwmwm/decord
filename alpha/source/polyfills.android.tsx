// Module ID: 16023
// Function ID: 16024
// Name: polyfills
// Dependencies: [16024, 16120, 2]

// Module 16023 (polyfills)
import Locale from "Locale" /* 16024 */;
import polyfillsNative from "polyfillsNative" /* 16120 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
