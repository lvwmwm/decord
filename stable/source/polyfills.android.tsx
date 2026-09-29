// Module ID: 14507
// Function ID: 14508
// Name: polyfills
// Dependencies: [14508, 14604, 2]

// Module 14507 (polyfills)
import module_14508 from "module_14508" /* 14508 */;
import polyfillsNative from "polyfillsNative" /* 14604 */;
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
