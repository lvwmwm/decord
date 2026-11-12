// Module ID: 16523
// Function ID: 16524
// Name: polyfills
// Dependencies: [16524, 16620, 2]

// Module 16523 (polyfills)
import Locale from "Locale" /* 16524 */;
import polyfillsNative from "polyfillsNative" /* 16620 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
