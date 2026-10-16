// Module ID: 5228
// Function ID: 5229
// Name: baseAssignIn
// Dependencies: [5225, 5229]

// Module 5228 (baseAssignIn)
import copyObject from "copyObject" /* 5225 */;
import keysIn from "keysIn" /* 5229 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
