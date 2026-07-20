// Module ID: 603
// Function ID: 7035
// Dependencies: []

// Module 603
({ hasOwnProperty: closure_2, propertyIsEnumerable: closure_3 } = Object.prototype);
const _module = require(dependencyMap[0]);
if (_module(() => arguments())) {
  let fn = require(dependencyMap[0]);
} else {
  fn = (arg0) => {
    let callResult = require(dependencyMap[1])(arg0);
    if (callResult) {
      callResult = callback.call(arg0, "callee");
    }
    if (callResult) {
      callResult = !callback2.call(arg0, "callee");
    }
    return callResult;
  };
}

export default fn;
