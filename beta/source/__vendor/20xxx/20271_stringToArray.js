// Module ID: 20271
// Function ID: 20272
// Name: stringToArray
// Dependencies: [20270, 20272, 20273]

// Module 20271 (stringToArray)
import hasUnicode from "hasUnicode" /* 20270 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20272)(arg0);
  } else {
    tmp3 = tmp(20273)(arg0);
  }
  return tmp3;
};
