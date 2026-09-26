// Module ID: 13688
// Function ID: 13689
// Name: polyfills
// Dependencies: [13689, 13785, 2]

// Module 13688 (polyfills)
import module_13689 from "module_13689" /* 13689 */;
import polyfillsNative from "polyfillsNative" /* 13785 */;
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
