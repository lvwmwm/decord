// Module ID: 5819
// Function ID: 5820
// Name: baseAssignIn
// Dependencies: [5816, 5820]

// Module 5819 (baseAssignIn)
import copyObject from "copyObject" /* 5816 */;
import keysIn from "keysIn" /* 5820 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
