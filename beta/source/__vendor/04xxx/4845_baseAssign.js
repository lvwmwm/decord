// Module ID: 4845
// Function ID: 4846
// Name: baseAssign
// Dependencies: [4837, 531]

// Module 4845 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 4837 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
