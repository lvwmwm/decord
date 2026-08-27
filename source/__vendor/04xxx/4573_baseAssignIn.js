// Module ID: 4573
// Function ID: 4574
// Name: baseAssignIn
// Dependencies: [4570, 4574]

// Module 4573 (baseAssignIn)
import copyObject from "copyObject" /* 4570 */;
import keysIn from "keysIn" /* 4574 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
