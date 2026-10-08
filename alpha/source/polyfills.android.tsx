// Module ID: 14277
// Function ID: 14278
// Name: polyfills
// Dependencies: [14278, 14374, 2]

// Module 14277 (polyfills)
import Locale from "Locale" /* 14278 */;
import polyfillsNative from "polyfillsNative" /* 14374 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
