// Module ID: 15443
// Function ID: 15444
// Name: polyfills
// Dependencies: [15444, 15540, 2]

// Module 15443 (polyfills)
import Locale from "Locale" /* 15444 */;
import polyfillsNative from "polyfillsNative" /* 15540 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
