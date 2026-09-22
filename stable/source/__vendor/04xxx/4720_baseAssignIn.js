// Module ID: 4720
// Function ID: 4721
// Name: baseAssignIn
// Dependencies: [4717, 4721]

// Module 4720 (baseAssignIn)
import copyObject from "copyObject" /* 4717 */;
import keysIn from "keysIn" /* 4721 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
