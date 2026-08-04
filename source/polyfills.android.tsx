// Module ID: 13376
// Function ID: 13377
// Name: toLocaleLowerCase
// Dependencies: [13377, 13473, 2]

// Module 13376 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13473 from "module_13473";

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
