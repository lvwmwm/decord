// Module ID: 4879
// Function ID: 4880
// Name: baseAssign
// Dependencies: [4871, 531]

// Module 4879 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 4871 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
