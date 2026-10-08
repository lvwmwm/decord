// Module ID: 5170
// Function ID: 5171
// Name: baseAssign
// Dependencies: [5162, 531]

// Module 5170 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 5162 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
