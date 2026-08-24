// Module ID: 4603
// Function ID: 4604
// Name: baseAssignIn
// Dependencies: [4600, 4604]

// Module 4603 (baseAssignIn)
import copyObject from "copyObject" /* 4600 */;
import keysIn from "keysIn" /* 4604 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
