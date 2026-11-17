// Module ID: 16681
// Function ID: 16682
// Name: polyfills
// Dependencies: [16682, 16778, 2]

// Module 16681 (polyfills)
import Locale from "Locale" /* 16682 */;
import polyfillsNative from "polyfillsNative" /* 16778 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
