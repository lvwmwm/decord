// Module ID: 4872
// Function ID: 4873
// Name: baseAssignIn
// Dependencies: [4869, 4873]

// Module 4872 (baseAssignIn)
import copyObject from "copyObject" /* 4869 */;
import keysIn from "keysIn" /* 4873 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
