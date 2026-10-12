// Module ID: 14450
// Function ID: 14451
// Name: polyfills
// Dependencies: [14451, 14547, 2]

// Module 14450 (polyfills)
import Locale from "Locale" /* 14451 */;
import polyfillsNative from "polyfillsNative" /* 14547 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
