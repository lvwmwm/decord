// Module ID: 14479
// Function ID: 14480
// Name: polyfills
// Dependencies: [14480, 14576, 2]

// Module 14479 (polyfills)
import module_14480 from "module_14480" /* 14480 */;
import polyfillsNative from "polyfillsNative" /* 14576 */;
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
