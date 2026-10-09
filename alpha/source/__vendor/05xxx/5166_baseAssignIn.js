// Module ID: 5166
// Function ID: 5167
// Name: baseAssignIn
// Dependencies: [5163, 5167]

// Module 5166 (baseAssignIn)
import copyObject from "copyObject" /* 5163 */;
import keysIn from "keysIn" /* 5167 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
