// Module ID: 16027
// Function ID: 16028
// Name: polyfills
// Dependencies: [16028, 16124, 2]

// Module 16027 (polyfills)
import Locale from "Locale" /* 16028 */;
import polyfillsNative from "polyfillsNative" /* 16124 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
