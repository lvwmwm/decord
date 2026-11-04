// Module ID: 5953
// Function ID: 5954
// Name: baseAssignIn
// Dependencies: [5950, 5954]

// Module 5953 (baseAssignIn)
import copyObject from "copyObject" /* 5950 */;
import keysIn from "keysIn" /* 5954 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
