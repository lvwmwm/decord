// Module ID: 4926
// Function ID: 4927
// Name: baseAssign
// Dependencies: [4918, 531]

// Module 4926 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 4918 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
