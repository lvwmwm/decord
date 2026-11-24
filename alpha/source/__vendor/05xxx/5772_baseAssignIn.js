// Module ID: 5772
// Function ID: 5773
// Name: baseAssignIn
// Dependencies: [5769, 5773]

// Module 5772 (baseAssignIn)
import copyObject from "copyObject" /* 5769 */;
import keysIn from "keysIn" /* 5773 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
