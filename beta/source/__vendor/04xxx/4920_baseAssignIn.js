// Module ID: 4920
// Function ID: 4921
// Name: baseAssignIn
// Dependencies: [4917, 4921]

// Module 4920 (baseAssignIn)
import copyObject from "copyObject" /* 4917 */;
import keysIn from "keysIn" /* 4921 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
