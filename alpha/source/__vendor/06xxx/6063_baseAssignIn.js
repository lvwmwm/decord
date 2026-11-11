// Module ID: 6063
// Function ID: 6064
// Name: baseAssignIn
// Dependencies: [6060, 6064]

// Module 6063 (baseAssignIn)
import copyObject from "copyObject" /* 6060 */;
import keysIn from "keysIn" /* 6064 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
