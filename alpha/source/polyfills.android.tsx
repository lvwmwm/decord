// Module ID: 13891
// Function ID: 13892
// Name: polyfills
// Dependencies: [13892, 13988, 2]

// Module 13891 (polyfills)
import module_13892 from "module_13892" /* 13892 */;
import polyfillsNative from "polyfillsNative" /* 13988 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
  }
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
