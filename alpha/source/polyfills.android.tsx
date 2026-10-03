// Module ID: 13958
// Function ID: 13959
// Name: polyfills
// Dependencies: [13959, 14055, 2]

// Module 13958 (polyfills)
import Locale from "Locale" /* 13959 */;
import polyfillsNative from "polyfillsNative" /* 14055 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
