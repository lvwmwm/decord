// Module ID: 5956
// Function ID: 5957
// Name: baseAssignIn
// Dependencies: [5953, 5957]

// Module 5956 (baseAssignIn)
import copyObject from "copyObject" /* 5953 */;
import keysIn from "keysIn" /* 5957 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
