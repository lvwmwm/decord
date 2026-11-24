// Module ID: 15458
// Function ID: 15459
// Name: polyfills
// Dependencies: [15459, 15555, 2]

// Module 15458 (polyfills)
import Locale from "Locale" /* 15459 */;
import polyfillsNative from "polyfillsNative" /* 15555 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
