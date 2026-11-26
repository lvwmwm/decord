// Module ID: 15449
// Function ID: 15450
// Name: polyfills
// Dependencies: [15450, 15546, 2]

// Module 15449 (polyfills)
import Locale from "Locale" /* 15450 */;
import polyfillsNative from "polyfillsNative" /* 15546 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
