// Module ID: 15140
// Function ID: 15141
// Name: polyfills
// Dependencies: [15141, 15237, 2]

// Module 15140 (polyfills)
import Locale from "Locale" /* 15141 */;
import polyfillsNative from "polyfillsNative" /* 15237 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
