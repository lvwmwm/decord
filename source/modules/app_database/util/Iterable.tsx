// Module ID: 6714
// Function ID: 52199
// Name: Chained
// Dependencies: [6, 7, 2]
// Exports: chain

// Module 6714 (Chained)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_2 = (() => {
  class Chained {
    constructor(arg0) {
      tmp = Chained(this, Chained);
      this.index = 0;
      this.items = arg0;
      return;
    }
  }
  let obj = {
    key: Symbol.iterator,
    value() {
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "next",
    value() {
      const self = this;
      if (this.index < this.items.length) {
        const iter2 = self.items[self.index].next();
        while (iter2.done) {
          self.index = self.index + 1;
        }
        return iter2;
      }
      return { done: true, value: undefined };
    }
  };
  items[1] = obj;
  return callback(Chained, items);
})();
const result = require("set").fileFinishedImporting("modules/app_database/util/Iterable.tsx");

export const chain = function chain(arg0) {
  return new closure_2(HermesBuiltin.copyRestArgs());
};
