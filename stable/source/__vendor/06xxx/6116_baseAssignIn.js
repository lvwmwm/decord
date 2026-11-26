// Module ID: 6116
// Function ID: 6117
// Name: baseAssignIn
// Dependencies: [6113, 6117]

// Module 6116 (baseAssignIn)
import copyObject from "copyObject" /* 6113 */;
import keysIn from "keysIn" /* 6117 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
