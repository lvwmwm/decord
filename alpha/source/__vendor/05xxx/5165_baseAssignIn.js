// Module ID: 5165
// Function ID: 5166
// Name: baseAssignIn
// Dependencies: [5162, 5166]

// Module 5165 (baseAssignIn)
import copyObject from "copyObject" /* 5162 */;
import keysIn from "keysIn" /* 5166 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
