// Module ID: 7923
// Function ID: 63156
// Name: Future
// Dependencies: [7, 6, 2]

// Module 7923 (Future)
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_defineProperties";

class Future {
  constructor() {
    self = this;
    tmp = self(this, Future);
    promise = new Promise((resolve, reject) => {
      self.resolve = resolve;
      self.reject = reject;
    });
    this.promise = promise;
    return;
  }
}
const importDefaultResultResult = require("_defineProperties")(Future);
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/Future.tsx");

export const Future = importDefaultResultResult;
