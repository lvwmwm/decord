// Module ID: 4919
// Function ID: 4920
// Name: assignValue
// Dependencies: [628, 680]

// Module 4919 (assignValue)
import eq from "eq" /* 628 */;
import baseAssignValue from "baseAssignValue" /* 680 */;


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
