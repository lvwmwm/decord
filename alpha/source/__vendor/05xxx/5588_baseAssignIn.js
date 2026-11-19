// Module ID: 5588
// Function ID: 5589
// Name: baseAssignIn
// Dependencies: [5585, 5589]

// Module 5588 (baseAssignIn)
import copyObject from "copyObject" /* 5585 */;
import keysIn from "keysIn" /* 5589 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
