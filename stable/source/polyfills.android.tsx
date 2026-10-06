// Module ID: 13689
// Function ID: 13690
// Name: polyfills
// Dependencies: [13690, 13786, 2]

// Module 13689 (polyfills)
import Locale from "Locale" /* 13690 */;
import polyfillsNative from "polyfillsNative" /* 13786 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
