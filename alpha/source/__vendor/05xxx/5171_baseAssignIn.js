// Module ID: 5171
// Function ID: 5172
// Name: baseAssignIn
// Dependencies: [5168, 5172]

// Module 5171 (baseAssignIn)
import copyObject from "copyObject" /* 5168 */;
import keysIn from "keysIn" /* 5172 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
