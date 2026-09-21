// Module ID: 4840
// Function ID: 4841
// Name: baseAssignIn
// Dependencies: [4837, 4841]

// Module 4840 (baseAssignIn)
import copyObject from "copyObject" /* 4837 */;
import keysIn from "keysIn" /* 4841 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
