// Module ID: 13377
// Function ID: 13378
// Name: toLocaleLowerCase
// Dependencies: [13378, 13474, 2]

// Module 13377 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13474 from "module_13474";

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
