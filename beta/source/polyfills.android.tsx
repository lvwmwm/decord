// Module ID: 16340
// Function ID: 16341
// Name: polyfills
// Dependencies: [16341, 16437, 2]

// Module 16340 (polyfills)
import Locale from "Locale" /* 16341 */;
import polyfillsNative from "polyfillsNative" /* 16437 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
