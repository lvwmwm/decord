// Module ID: 5167
// Function ID: 5168
// Name: baseAssignIn
// Dependencies: [5164, 5168]

// Module 5167 (baseAssignIn)
import copyObject from "copyObject" /* 5164 */;
import keysIn from "keysIn" /* 5168 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
