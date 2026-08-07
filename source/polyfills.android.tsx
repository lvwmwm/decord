// Module ID: 13399
// Function ID: 13400
// Name: toLocaleLowerCase
// Dependencies: [13400, 13496, 2]

// Module 13399 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13496 from "module_13496";

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
