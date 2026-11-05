// Module ID: 20182
// Function ID: 20183
// Name: stringToArray
// Dependencies: [20181, 20183, 20184]

// Module 20182 (stringToArray)
import hasUnicode from "hasUnicode" /* 20181 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20183)(arg0);
  } else {
    tmp3 = tmp(20184)(arg0);
  }
  return tmp3;
};
