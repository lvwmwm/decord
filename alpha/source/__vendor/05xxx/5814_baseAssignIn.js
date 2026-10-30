// Module ID: 5814
// Function ID: 5815
// Name: baseAssignIn
// Dependencies: [5811, 5815]

// Module 5814 (baseAssignIn)
import copyObject from "copyObject" /* 5811 */;
import keysIn from "keysIn" /* 5815 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
