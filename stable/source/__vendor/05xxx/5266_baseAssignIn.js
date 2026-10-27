// Module ID: 5266
// Function ID: 5267
// Name: baseAssignIn
// Dependencies: [5263, 5267]

// Module 5266 (baseAssignIn)
import copyObject from "copyObject" /* 5263 */;
import keysIn from "keysIn" /* 5267 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
