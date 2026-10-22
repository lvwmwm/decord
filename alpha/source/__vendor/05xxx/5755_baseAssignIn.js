// Module ID: 5755
// Function ID: 5756
// Name: baseAssignIn
// Dependencies: [5752, 5756]

// Module 5755 (baseAssignIn)
import copyObject from "copyObject" /* 5752 */;
import keysIn from "keysIn" /* 5756 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
