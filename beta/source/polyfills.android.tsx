// Module ID: 15435
// Function ID: 15436
// Name: polyfills
// Dependencies: [15436, 15532, 2]

// Module 15435 (polyfills)
import Locale from "Locale" /* 15436 */;
import polyfillsNative from "polyfillsNative" /* 15532 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
