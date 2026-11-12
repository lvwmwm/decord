// Module ID: 20309
// Function ID: 20310
// Name: stringToArray
// Dependencies: [20308, 20310, 20311]

// Module 20309 (stringToArray)
import hasUnicode from "hasUnicode" /* 20308 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20310)(arg0);
  } else {
    tmp3 = tmp(20311)(arg0);
  }
  return tmp3;
};
