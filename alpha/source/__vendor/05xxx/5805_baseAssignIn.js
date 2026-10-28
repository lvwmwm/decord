// Module ID: 5805
// Function ID: 5806
// Name: baseAssignIn
// Dependencies: [5802, 5806]

// Module 5805 (baseAssignIn)
import copyObject from "copyObject" /* 5802 */;
import keysIn from "keysIn" /* 5806 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
