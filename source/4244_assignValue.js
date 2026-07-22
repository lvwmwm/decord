// Module ID: 4244
// Function ID: 37309
// Name: assignValue
// Dependencies: []

// Module 4244 (assignValue)

export default function assignValue(arg0, arg1, arg2) {
  let callResult = hasOwnProperty.call(arg0, arg1);
  if (callResult) {
    callResult = require(dependencyMap[0])(arg0[arg1], arg2);
  }
  if (callResult) {
    callResult = undefined !== arg2 || arg1 in arg0;
    const tmp4 = undefined !== arg2 || arg1 in arg0;
  }
  if (!callResult) {
    require(dependencyMap[1])(arg0, arg1, arg2);
  }
};
