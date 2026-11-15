// Module ID: 16370
// Function ID: 16371
// Name: polyfills
// Dependencies: [16371, 16467, 2]

// Module 16370 (polyfills)
import Locale from "Locale" /* 16371 */;
import polyfillsNative from "polyfillsNative" /* 16467 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
