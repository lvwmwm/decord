// Module ID: 5939
// Function ID: 5940
// Name: baseAssignIn
// Dependencies: [5936, 5940]

// Module 5939 (baseAssignIn)
import copyObject from "copyObject" /* 5936 */;
import keysIn from "keysIn" /* 5940 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
