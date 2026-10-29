// Module ID: 5807
// Function ID: 5808
// Name: baseAssignIn
// Dependencies: [5804, 5808]

// Module 5807 (baseAssignIn)
import copyObject from "copyObject" /* 5804 */;
import keysIn from "keysIn" /* 5808 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
