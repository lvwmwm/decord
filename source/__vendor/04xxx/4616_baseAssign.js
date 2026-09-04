// Module ID: 4616
// Function ID: 4617
// Name: baseAssign
// Dependencies: [4608, 613]

// Module 4616 (baseAssign)
import keys from "keys" /* 613 */;
import copyObject from "copyObject" /* 4608 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keys(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
