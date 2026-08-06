// Module ID: 13385
// Function ID: 13386
// Name: toLocaleLowerCase
// Dependencies: [13386, 13482, 2]

// Module 13385 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13482 from "module_13482";

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
