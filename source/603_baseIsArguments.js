// Module ID: 603
// Function ID: 7035
// Name: baseIsArguments
// Dependencies: [604, 577]

// Module 603 (baseIsArguments)
import baseIsArguments from "baseIsArguments";

let closure_2;
let closure_3;
({ hasOwnProperty: closure_2, propertyIsEnumerable: closure_3 } = Object.prototype);
if (baseIsArguments((() => arguments)())) {
  let fn = require("baseIsArguments");
} else {
  fn = (arg0) => {
    let callResult = require(577) /* isObjectLike */(arg0);
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
