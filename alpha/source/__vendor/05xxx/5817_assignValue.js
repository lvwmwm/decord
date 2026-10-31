// Module ID: 5817
// Function ID: 5818
// Name: assignValue
// Dependencies: [615, 667]

// Module 5817 (assignValue)
import eq from "eq" /* 615 */;
import baseAssignValue from "baseAssignValue" /* 667 */;


export default function assignValue(arg0, arg1, arg2) {
  const tmp = arg0[arg1];
  let callResult = hasOwnProperty.call(arg0, arg1) && eq(tmp, arg2);
  if (callResult) {
    callResult = undefined !== arg2 || arg1 in arg0;
  }
  if (!callResult) {
    baseAssignValue(arg0, arg1, arg2);
  }
};
