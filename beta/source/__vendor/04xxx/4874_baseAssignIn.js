// Module ID: 4874
// Function ID: 4875
// Name: baseAssignIn
// Dependencies: [4871, 4875]

// Module 4874 (baseAssignIn)
import copyObject from "copyObject" /* 4871 */;
import keysIn from "keysIn" /* 4875 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
