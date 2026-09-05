// Module ID: 4644
// Function ID: 4645
// Name: baseAssignIn
// Dependencies: [4641, 4645]

// Module 4644 (baseAssignIn)
import copyObject from "copyObject" /* 4641 */;
import keysIn from "keysIn" /* 4645 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};
