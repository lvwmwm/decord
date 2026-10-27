// Module ID: 15480
// Function ID: 15481
// Name: polyfills
// Dependencies: [15481, 15577, 2]

// Module 15480 (polyfills)
import Locale from "Locale" /* 15481 */;
import polyfillsNative from "polyfillsNative" /* 15577 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
