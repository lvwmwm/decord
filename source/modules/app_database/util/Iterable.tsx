// Module ID: 6709
// Function ID: 52156
// Name: Chained
// Dependencies: []
// Exports: chain

// Module 6709 (Chained)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = () => {
  class Chained {
    constructor(arg0) {
      tmp = Chained(this, Chained);
      this.index = 0;
      this.items = arg0;
      return;
    }
  }
  let closure_0 = Chained;
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
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_database/util/Iterable.tsx");

export const chain = function chain(arg0) {
  return new closure_2(HermesBuiltin.copyRestArgs());
};
