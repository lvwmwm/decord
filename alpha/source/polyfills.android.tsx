// Module ID: 14771
// Function ID: 14772
// Name: polyfills
// Dependencies: [14772, 14868, 2]

// Module 14771 (polyfills)
import Locale from "Locale" /* 14772 */;
import polyfillsNative from "polyfillsNative" /* 14868 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  let str = "";
  if (0 !== this.length) {
    str = toLocaleLowerCase.call(tmp);
  }
  return str;
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
