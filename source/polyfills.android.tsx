// Module ID: 13261
// Function ID: 13262
// Name: toLocaleLowerCase
// Dependencies: [13262, 13358, 2]

// Module 13261 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13358 from "module_13358";

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
