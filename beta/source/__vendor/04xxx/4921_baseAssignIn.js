// Module ID: 4921
// Function ID: 4922
// Name: baseAssignIn
// Dependencies: [4918, 4922]

// Module 4921 (baseAssignIn)
import copyObject from "copyObject" /* 4918 */;
import keysIn from "keysIn" /* 4922 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
