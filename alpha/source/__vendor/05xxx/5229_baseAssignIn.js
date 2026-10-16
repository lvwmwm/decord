// Module ID: 5229
// Function ID: 5230
// Name: baseAssignIn
// Dependencies: [5226, 5230]

// Module 5229 (baseAssignIn)
import copyObject from "copyObject" /* 5226 */;
import keysIn from "keysIn" /* 5230 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
