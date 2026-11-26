// Module ID: 5898
// Function ID: 5899
// Name: baseAssignIn
// Dependencies: [5895, 5899]

// Module 5898 (baseAssignIn)
import copyObject from "copyObject" /* 5895 */;
import keysIn from "keysIn" /* 5899 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
