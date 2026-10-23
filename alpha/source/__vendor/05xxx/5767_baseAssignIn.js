// Module ID: 5767
// Function ID: 5768
// Name: baseAssignIn
// Dependencies: [5764, 5768]

// Module 5767 (baseAssignIn)
import copyObject from "copyObject" /* 5764 */;
import keysIn from "keysIn" /* 5768 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
