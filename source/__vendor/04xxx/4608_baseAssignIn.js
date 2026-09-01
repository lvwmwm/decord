// Module ID: 4608
// Function ID: 4609
// Name: baseAssignIn
// Dependencies: [4605, 4609]

// Module 4608 (baseAssignIn)
import copyObject from "copyObject" /* 4605 */;
import keysIn from "keysIn" /* 4609 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
