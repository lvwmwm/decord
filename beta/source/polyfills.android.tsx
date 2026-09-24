// Module ID: 14517
// Function ID: 14518
// Name: polyfills
// Dependencies: [14518, 14614, 2]

// Module 14517 (polyfills)
import module_14518 from "module_14518" /* 14518 */;
import polyfillsNative from "polyfillsNative" /* 14614 */;
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
