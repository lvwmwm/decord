// Module ID: 4925
// Function ID: 4926
// Name: baseAssign
// Dependencies: [4917, 531]

// Module 4925 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 4917 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};
