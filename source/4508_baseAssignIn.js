// Module ID: 4508
// Function ID: 4509
// Name: baseAssignIn
// Dependencies: [4505, 4509]

// Module 4508 (baseAssignIn)
import copyObject from "copyObject" /* 4505 */;
import keysIn from "keysIn" /* 4509 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
