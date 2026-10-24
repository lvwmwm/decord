// Module ID: 15439
// Function ID: 15440
// Name: polyfills
// Dependencies: [15440, 15536, 2]

// Module 15439 (polyfills)
import Locale from "Locale" /* 15440 */;
import polyfillsNative from "polyfillsNative" /* 15536 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
