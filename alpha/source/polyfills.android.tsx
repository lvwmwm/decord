// Module ID: 15706
// Function ID: 15707
// Name: polyfills
// Dependencies: [15707, 15803, 2]

// Module 15706 (polyfills)
import Locale from "Locale" /* 15707 */;
import polyfillsNative from "polyfillsNative" /* 15803 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
