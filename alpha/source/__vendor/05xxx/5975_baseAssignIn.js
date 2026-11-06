// Module ID: 5975
// Function ID: 5976
// Name: baseAssignIn
// Dependencies: [5972, 5976]

// Module 5975 (baseAssignIn)
import copyObject from "copyObject" /* 5972 */;
import keysIn from "keysIn" /* 5976 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
