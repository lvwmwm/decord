// Module ID: 15150
// Function ID: 15151
// Name: polyfills
// Dependencies: [15151, 15247, 2]

// Module 15150 (polyfills)
import Locale from "Locale" /* 15151 */;
import polyfillsNative from "polyfillsNative" /* 15247 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
