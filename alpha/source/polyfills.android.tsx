// Module ID: 15942
// Function ID: 15943
// Name: polyfills
// Dependencies: [15943, 16039, 2]

// Module 15942 (polyfills)
import Locale from "Locale" /* 15943 */;
import polyfillsNative from "polyfillsNative" /* 16039 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
