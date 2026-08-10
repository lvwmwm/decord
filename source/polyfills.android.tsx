// Module ID: 13471
// Function ID: 13472
// Name: toLocaleLowerCase
// Dependencies: [13472, 13568, 2]

// Module 13471 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13568 from "module_13568";

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
