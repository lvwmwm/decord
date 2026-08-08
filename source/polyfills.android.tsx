// Module ID: 13469
// Function ID: 13470
// Name: toLocaleLowerCase
// Dependencies: [13470, 13566, 2]

// Module 13469 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13566 from "module_13566";

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
