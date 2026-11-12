// Module ID: 16372
// Function ID: 16373
// Name: polyfills
// Dependencies: [16373, 16469, 2]

// Module 16372 (polyfills)
import Locale from "Locale" /* 16373 */;
import polyfillsNative from "polyfillsNative" /* 16469 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
