// Module ID: 5750
// Function ID: 5751
// Name: baseAssignIn
// Dependencies: [5747, 5751]

// Module 5750 (baseAssignIn)
import copyObject from "copyObject" /* 5747 */;
import keysIn from "keysIn" /* 5751 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
