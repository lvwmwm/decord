// Module ID: 15219
// Function ID: 15220
// Name: polyfills
// Dependencies: [15220, 15316, 2]

// Module 15219 (polyfills)
import Locale from "Locale" /* 15220 */;
import polyfillsNative from "polyfillsNative" /* 15316 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
