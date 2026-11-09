// Module ID: 5948
// Function ID: 5949
// Name: baseAssignIn
// Dependencies: [5945, 5949]

// Module 5948 (baseAssignIn)
import copyObject from "copyObject" /* 5945 */;
import keysIn from "keysIn" /* 5949 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
