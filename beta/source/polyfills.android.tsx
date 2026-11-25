// Module ID: 15445
// Function ID: 15446
// Name: polyfills
// Dependencies: [15446, 15542, 2]

// Module 15445 (polyfills)
import Locale from "Locale" /* 15446 */;
import polyfillsNative from "polyfillsNative" /* 15542 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
