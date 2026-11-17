// Module ID: 6128
// Function ID: 6129
// Name: baseAssign
// Dependencies: [6120, 531]

// Module 6128 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 6120 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
