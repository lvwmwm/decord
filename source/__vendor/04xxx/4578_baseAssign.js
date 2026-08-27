// Module ID: 4578
// Function ID: 4579
// Name: baseAssign
// Dependencies: [4570, 616]

// Module 4578 (baseAssign)
import keys from "keys" /* 616 */;
import copyObject from "copyObject" /* 4570 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keys(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
