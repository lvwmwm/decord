// Module ID: 13537
// Function ID: 13538
// Name: toLocaleLowerCase
// Dependencies: [13538, 13634, 2]

// Module 13537 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13634 from "module_13634";

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
