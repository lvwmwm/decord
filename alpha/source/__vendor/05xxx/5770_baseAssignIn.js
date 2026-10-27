// Module ID: 5770
// Function ID: 5771
// Name: baseAssignIn
// Dependencies: [5767, 5771]

// Module 5770 (baseAssignIn)
import copyObject from "copyObject" /* 5767 */;
import keysIn from "keysIn" /* 5771 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
