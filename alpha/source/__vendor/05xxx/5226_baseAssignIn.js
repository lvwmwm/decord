// Module ID: 5226
// Function ID: 5227
// Name: baseAssignIn
// Dependencies: [5223, 5227]

// Module 5226 (baseAssignIn)
import copyObject from "copyObject" /* 5223 */;
import keysIn from "keysIn" /* 5227 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
