// Module ID: 1672
// Function ID: 1673
// Name: JSWorklets
// Dependencies: [41, 42, 1664]
// Exports: createJSWorkletsModule

// Module 1672 (JSWorklets)
import _classCallCheck from "_classCallCheck";

const JSWorklets = arg1;
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
      const reanimatedError = new JSWorklets(1664).ReanimatedError("makeShareableClone should never be called in JSWorklets.");
      throw reanimatedError;
    }
  }
];
let closure_3 = require("_createClass")(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};
