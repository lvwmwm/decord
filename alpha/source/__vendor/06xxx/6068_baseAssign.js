// Module ID: 6068
// Function ID: 6069
// Name: baseAssign
// Dependencies: [6060, 531]

// Module 6068 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 6060 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
