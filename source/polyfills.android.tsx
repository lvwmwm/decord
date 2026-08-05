// Module ID: 13348
// Function ID: 13349
// Name: toLocaleLowerCase
// Dependencies: [13349, 13445, 2]

// Module 13348 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13445 from "module_13445";

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
