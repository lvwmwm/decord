// Module ID: 5619
// Function ID: 5620
// Name: baseAssignIn
// Dependencies: [5616, 5620]

// Module 5619 (baseAssignIn)
import copyObject from "copyObject" /* 5616 */;
import keysIn from "keysIn" /* 5620 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
