// Module ID: 13856
// Function ID: 13857
// Name: polyfills
// Dependencies: [13857, 13953, 2]

// Module 13856 (polyfills)
import module_13857 from "module_13857" /* 13857 */;
import polyfillsNative from "polyfillsNative" /* 13953 */;
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
