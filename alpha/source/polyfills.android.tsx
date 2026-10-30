// Module ID: 15982
// Function ID: 15983
// Name: polyfills
// Dependencies: [15983, 16079, 2]

// Module 15982 (polyfills)
import Locale from "Locale" /* 15983 */;
import polyfillsNative from "polyfillsNative" /* 16079 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
