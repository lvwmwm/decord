// Module ID: 4572
// Function ID: 4573
// Name: baseAssignIn
// Dependencies: [4569, 4573]

// Module 4572 (baseAssignIn)
import copyObject from "copyObject" /* 4569 */;
import keysIn from "keysIn" /* 4573 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
