// Module ID: 15444
// Function ID: 15445
// Name: polyfills
// Dependencies: [15445, 15541, 2]

// Module 15444 (polyfills)
import Locale from "Locale" /* 15445 */;
import polyfillsNative from "polyfillsNative" /* 15541 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
