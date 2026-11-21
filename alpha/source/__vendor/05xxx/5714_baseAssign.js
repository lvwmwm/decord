// Module ID: 5714
// Function ID: 5715
// Name: baseAssign
// Dependencies: [5706, 531]

// Module 5714 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 5706 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
