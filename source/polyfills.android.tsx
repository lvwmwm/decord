// Module ID: 13479
// Function ID: 13480
// Name: toLocaleLowerCase
// Dependencies: [13480, 13576, 2]

// Module 13479 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13576 from "module_13576";

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
