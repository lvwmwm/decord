// Module ID: 13536
// Function ID: 13537
// Name: toLocaleLowerCase
// Dependencies: [13537, 13633, 2]

// Module 13536 (toLocaleLowerCase)
import addLikelySubtags from "addLikelySubtags";
import module_13633 from "module_13633";

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
