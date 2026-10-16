// Module ID: 18829
// Function ID: 18830
// Name: stringToArray
// Dependencies: [18828, 18830, 18831]

// Module 18829 (stringToArray)
import hasUnicode from "hasUnicode" /* 18828 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18830)(arg0);
  } else {
    tmp3 = tmp(18831)(arg0);
  }
  return tmp3;
};
