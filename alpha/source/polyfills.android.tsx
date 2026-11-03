// Module ID: 16170
// Function ID: 16171
// Name: polyfills
// Dependencies: [16171, 16267, 2]

// Module 16170 (polyfills)
import Locale from "Locale" /* 16171 */;
import polyfillsNative from "polyfillsNative" /* 16267 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
