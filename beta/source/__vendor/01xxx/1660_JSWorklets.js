// Module ID: 1660
// Function ID: 1661
// Name: JSWorklets
// Dependencies: [41, 42, 1652]
// Exports: createJSWorkletsModule

// Module 1660 (JSWorklets)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const JSWorklets = arg1;
class JSWorklets {
  constructor() {
    tmp = c2(this, JSWorklets);
    return;
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone() {
    const reanimatedError = new JSWorklets(1652).ReanimatedError("makeShareableClone should never be called in JSWorklets.");
    throw reanimatedError;
  }
};
const items = [entry];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};
