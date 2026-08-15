// Module ID: 13572
// Function ID: 13573
// Name: toLocaleLowerCase
// Dependencies: [13573, 13669, 2]

// Module 13572 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13669 from "module_13669";

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
