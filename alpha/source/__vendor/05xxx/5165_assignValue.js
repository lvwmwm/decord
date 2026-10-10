// Module ID: 5165
// Function ID: 5166
// Name: assignValue
// Dependencies: [627, 679]

// Module 5165 (assignValue)
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
