// Module ID: 15251
// Function ID: 15252
// Name: polyfills
// Dependencies: [15252, 15348, 2]

// Module 15251 (polyfills)
import Locale from "Locale" /* 15252 */;
import polyfillsNative from "polyfillsNative" /* 15348 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
