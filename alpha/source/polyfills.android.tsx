// Module ID: 15105
// Function ID: 15106
// Name: polyfills
// Dependencies: [15106, 15202, 2]

// Module 15105 (polyfills)
import Locale from "Locale" /* 15106 */;
import polyfillsNative from "polyfillsNative" /* 15202 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
