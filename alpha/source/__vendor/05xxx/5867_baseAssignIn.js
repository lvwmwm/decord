// Module ID: 5867
// Function ID: 5868
// Name: baseAssignIn
// Dependencies: [5864, 5868]

// Module 5867 (baseAssignIn)
import copyObject from "copyObject" /* 5864 */;
import keysIn from "keysIn" /* 5868 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
