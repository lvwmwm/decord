// Module ID: 16022
// Function ID: 16023
// Name: polyfills
// Dependencies: [16023, 16119, 2]

// Module 16022 (polyfills)
import Locale from "Locale" /* 16023 */;
import polyfillsNative from "polyfillsNative" /* 16119 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
