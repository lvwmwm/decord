// Module ID: 5709
// Function ID: 5710
// Name: baseAssignIn
// Dependencies: [5706, 5710]

// Module 5709 (baseAssignIn)
import copyObject from "copyObject" /* 5706 */;
import keysIn from "keysIn" /* 5710 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
