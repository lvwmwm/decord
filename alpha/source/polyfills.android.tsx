// Module ID: 15638
// Function ID: 15639
// Name: polyfills
// Dependencies: [15639, 15735, 2]

// Module 15638 (polyfills)
import Locale from "Locale" /* 15639 */;
import polyfillsNative from "polyfillsNative" /* 15735 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
