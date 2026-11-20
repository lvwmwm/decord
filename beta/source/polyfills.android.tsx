// Module ID: 16648
// Function ID: 16649
// Name: polyfills
// Dependencies: [16649, 16745, 2]

// Module 16648 (polyfills)
import Locale from "Locale" /* 16649 */;
import polyfillsNative from "polyfillsNative" /* 16745 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
