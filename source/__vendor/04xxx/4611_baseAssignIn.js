// Module ID: 4611
// Function ID: 4612
// Name: baseAssignIn
// Dependencies: [4608, 4612]

// Module 4611 (baseAssignIn)
import copyObject from "copyObject" /* 4608 */;
import keysIn from "keysIn" /* 4612 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
