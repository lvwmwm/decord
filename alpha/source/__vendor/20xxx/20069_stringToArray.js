// Module ID: 20069
// Function ID: 20070
// Name: stringToArray
// Dependencies: [20068, 20070, 20071]

// Module 20069 (stringToArray)
import hasUnicode from "hasUnicode" /* 20068 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20070)(arg0);
  } else {
    tmp3 = tmp(20071)(arg0);
  }
  return tmp3;
};
