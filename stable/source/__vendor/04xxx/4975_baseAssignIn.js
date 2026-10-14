// Module ID: 4975
// Function ID: 4976
// Name: baseAssignIn
// Dependencies: [4972, 4976]

// Module 4975 (baseAssignIn)
import copyObject from "copyObject" /* 4972 */;
import keysIn from "keysIn" /* 4976 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
