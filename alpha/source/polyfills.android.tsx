// Module ID: 15580
// Function ID: 15581
// Name: polyfills
// Dependencies: [15581, 15677, 2]

// Module 15580 (polyfills)
import Locale from "Locale" /* 15581 */;
import polyfillsNative from "polyfillsNative" /* 15677 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
