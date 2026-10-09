// Module ID: 14373
// Function ID: 14374
// Name: polyfills
// Dependencies: [14374, 14470, 2]

// Module 14373 (polyfills)
import Locale from "Locale" /* 14374 */;
import polyfillsNative from "polyfillsNative" /* 14470 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
