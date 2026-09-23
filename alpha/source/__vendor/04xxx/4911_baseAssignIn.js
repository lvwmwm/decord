// Module ID: 4911
// Function ID: 4912
// Name: baseAssignIn
// Dependencies: [4908, 4912]

// Module 4911 (baseAssignIn)
import copyObject from "copyObject" /* 4908 */;
import keysIn from "keysIn" /* 4912 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
