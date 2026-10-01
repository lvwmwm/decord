// Module ID: 13687
// Function ID: 13688
// Name: polyfills
// Dependencies: [13688, 13784, 2]

// Module 13687 (polyfills)
import Locale from "Locale" /* 13688 */;
import polyfillsNative from "polyfillsNative" /* 13784 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
