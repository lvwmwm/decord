// Module ID: 5769
// Function ID: 5770
// Name: baseAssignIn
// Dependencies: [5766, 5770]

// Module 5769 (baseAssignIn)
import copyObject from "copyObject" /* 5766 */;
import keysIn from "keysIn" /* 5770 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
