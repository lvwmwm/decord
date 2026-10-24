// Module ID: 5767
// Function ID: 5768
// Name: assignValue
// Dependencies: [627, 679]

// Module 5767 (assignValue)
import eq from "eq" /* 627 */;
import baseAssignValue from "baseAssignValue" /* 679 */;


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
