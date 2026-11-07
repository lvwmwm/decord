// Module ID: 16330
// Function ID: 16331
// Name: polyfills
// Dependencies: [16331, 16427, 2]

// Module 16330 (polyfills)
import Locale from "Locale" /* 16331 */;
import polyfillsNative from "polyfillsNative" /* 16427 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
