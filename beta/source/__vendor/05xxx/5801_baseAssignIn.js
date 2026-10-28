// Module ID: 5801
// Function ID: 5802
// Name: baseAssignIn
// Dependencies: [5798, 5802]

// Module 5801 (baseAssignIn)
import copyObject from "copyObject" /* 5798 */;
import keysIn from "keysIn" /* 5802 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
