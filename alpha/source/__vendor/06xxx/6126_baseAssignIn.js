// Module ID: 6126
// Function ID: 6127
// Name: baseAssignIn
// Dependencies: [6123, 6127]

// Module 6126 (baseAssignIn)
import copyObject from "copyObject" /* 6123 */;
import keysIn from "keysIn" /* 6127 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
