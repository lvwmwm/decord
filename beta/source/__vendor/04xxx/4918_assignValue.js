// Module ID: 4918
// Function ID: 4919
// Name: assignValue
// Dependencies: [616, 668]

// Module 4918 (assignValue)
import eq from "eq" /* 616 */;
import baseAssignValue from "baseAssignValue" /* 668 */;


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
