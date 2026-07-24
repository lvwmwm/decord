// Module ID: 1601
// Function ID: 17819
// Name: JSWorklets
// Dependencies: [6, 7, 1593]
// Exports: createJSWorkletsModule

// Module 1601 (JSWorklets)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_4 = (() => {
  class JSWorklets {
    constructor() {
      tmp = outer1_2(this, JSWorklets);
      return;
    }
  }
  const items = [
    {
      key: "makeShareableClone",
      value: function makeShareableClone() {
        const reanimatedError = new JSWorklets(outer1_1[2]).ReanimatedError("makeShareableClone should never be called in JSWorklets.");
        throw reanimatedError;
      }
    }
  ];
  return callback(JSWorklets, items);
})();

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_4();
};
