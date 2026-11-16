// Module ID: 5980
// Function ID: 5981
// Name: baseAssignIn
// Dependencies: [5977, 5981]

// Module 5980 (baseAssignIn)
import copyObject from "copyObject" /* 5977 */;
import keysIn from "keysIn" /* 5981 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
