// Module ID: 20312
// Function ID: 20313
// Name: stringToArray
// Dependencies: [20311, 20313, 20314]

// Module 20312 (stringToArray)
import hasUnicode from "hasUnicode" /* 20311 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20313)(arg0);
  } else {
    tmp3 = tmp(20314)(arg0);
  }
  return tmp3;
};
