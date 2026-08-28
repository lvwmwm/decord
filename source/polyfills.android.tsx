// Module ID: 13784
// Function ID: 13785
// Name: toLocaleLowerCase
// Dependencies: [13785, 13881, 2]

// Module 13784 (toLocaleLowerCase)
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 13785 */;
import module_13881 from "module_13881" /* 13881 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
    const tmp = toLocaleLowerCase;
  }
};
const result = set.fileFinishedImporting("polyfills.android.tsx");
