// Module ID: 15478
// Function ID: 15479
// Name: polyfills
// Dependencies: [15479, 15575, 2]

// Module 15478 (polyfills)
import Locale from "Locale" /* 15479 */;
import polyfillsNative from "polyfillsNative" /* 15575 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
