// Module ID: 13540
// Function ID: 13541
// Name: toLocaleLowerCase
// Dependencies: [13541, 13637, 2]

// Module 13540 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13637 from "module_13637";

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
