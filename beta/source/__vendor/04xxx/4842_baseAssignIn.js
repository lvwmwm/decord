// Module ID: 4842
// Function ID: 4843
// Name: baseAssignIn
// Dependencies: [4839, 4843]

// Module 4842 (baseAssignIn)
import copyObject from "copyObject" /* 4839 */;
import keysIn from "keysIn" /* 4843 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
