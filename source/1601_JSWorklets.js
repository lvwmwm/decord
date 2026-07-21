// Module ID: 1601
// Function ID: 17817
// Name: JSWorklets
// Dependencies: []
// Exports: createJSWorkletsModule

// Module 1601 (JSWorklets)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = () => {
  class JSWorklets {
    constructor() {
      tmp = closure_2(this, JSWorklets);
      return;
    }
  }
  const arg1 = JSWorklets;
  const items = [
    {
      key: "makeShareableClone",
      value: function makeShareableClone() {
        const reanimatedError = new JSWorklets(closure_1[2]).ReanimatedError("makeShareableClone should never be called in JSWorklets.");
        throw reanimatedError;
      }
    }
  ];
  return callback(JSWorklets, items);
}();

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_4();
};
