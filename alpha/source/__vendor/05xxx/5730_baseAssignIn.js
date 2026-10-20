// Module ID: 5730
// Function ID: 5731
// Name: baseAssignIn
// Dependencies: [5727, 5731]

// Module 5730 (baseAssignIn)
import copyObject from "copyObject" /* 5727 */;
import keysIn from "keysIn" /* 5731 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
