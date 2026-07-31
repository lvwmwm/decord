// Module ID: 13280
// Function ID: 13281
// Name: toLocaleLowerCase
// Dependencies: [13281, 13377, 2]

// Module 13280 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13377 from "module_13377";

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
const result = require("set").fileFinishedImporting("polyfills.android.tsx");
