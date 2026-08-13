// Module ID: 13528
// Function ID: 13529
// Name: toLocaleLowerCase
// Dependencies: [13529, 13625, 2]

// Module 13528 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13625 from "module_13625";

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
