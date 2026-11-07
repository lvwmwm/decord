// Module ID: 20258
// Function ID: 20259
// Name: stringToArray
// Dependencies: [20257, 20259, 20260]

// Module 20258 (stringToArray)
import hasUnicode from "hasUnicode" /* 20257 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20259)(arg0);
  } else {
    tmp3 = tmp(20260)(arg0);
  }
  return tmp3;
};
