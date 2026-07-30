// Module ID: 13256
// Function ID: 13257
// Name: toLocaleLowerCase
// Dependencies: [13257, 13353, 2]

// Module 13256 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13353 from "module_13353";

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
