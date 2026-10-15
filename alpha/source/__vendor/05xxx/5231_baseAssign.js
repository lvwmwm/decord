// Module ID: 5231
// Function ID: 5232
// Name: baseAssign
// Dependencies: [5223, 531]

// Module 5231 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 5223 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
