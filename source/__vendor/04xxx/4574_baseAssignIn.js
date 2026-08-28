// Module ID: 4574
// Function ID: 4575
// Name: baseAssignIn
// Dependencies: [4571, 4575]

// Module 4574 (baseAssignIn)
import copyObject from "copyObject" /* 4571 */;
import keysIn from "keysIn" /* 4575 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
