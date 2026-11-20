// Module ID: 5590
// Function ID: 5591
// Name: baseAssignIn
// Dependencies: [5587, 5591]

// Module 5590 (baseAssignIn)
import copyObject from "copyObject" /* 5587 */;
import keysIn from "keysIn" /* 5591 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
