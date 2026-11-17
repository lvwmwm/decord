// Module ID: 6123
// Function ID: 6124
// Name: baseAssignIn
// Dependencies: [6120, 6124]

// Module 6123 (baseAssignIn)
import copyObject from "copyObject" /* 6120 */;
import keysIn from "keysIn" /* 6124 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
