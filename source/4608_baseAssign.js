// Module ID: 4608
// Function ID: 4609
// Name: baseAssign
// Dependencies: [4600, 616]

// Module 4608 (baseAssign)
import keys from "keys" /* 616 */;
import copyObject from "copyObject" /* 4600 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keys(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
