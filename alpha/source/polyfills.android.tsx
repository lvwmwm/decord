// Module ID: 15269
// Function ID: 15270
// Name: polyfills
// Dependencies: [15270, 15366, 2]

// Module 15269 (polyfills)
import Locale from "Locale" /* 15270 */;
import polyfillsNative from "polyfillsNative" /* 15366 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
