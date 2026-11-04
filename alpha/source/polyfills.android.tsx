// Module ID: 16259
// Function ID: 16260
// Name: polyfills
// Dependencies: [16260, 16356, 2]

// Module 16259 (polyfills)
import Locale from "Locale" /* 16260 */;
import polyfillsNative from "polyfillsNative" /* 16356 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
