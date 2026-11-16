// Module ID: 16646
// Function ID: 16647
// Name: polyfills
// Dependencies: [16647, 16743, 2]

// Module 16646 (polyfills)
import Locale from "Locale" /* 16647 */;
import polyfillsNative from "polyfillsNative" /* 16743 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
