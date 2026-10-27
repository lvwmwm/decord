// Module ID: 15223
// Function ID: 15224
// Name: polyfills
// Dependencies: [15224, 15320, 2]

// Module 15223 (polyfills)
import Locale from "Locale" /* 15224 */;
import polyfillsNative from "polyfillsNative" /* 15320 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
