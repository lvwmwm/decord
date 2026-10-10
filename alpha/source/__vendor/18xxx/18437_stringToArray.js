// Module ID: 18437
// Function ID: 18438
// Name: stringToArray
// Dependencies: [18436, 18438, 18439]

// Module 18437 (stringToArray)
import hasUnicode from "hasUnicode" /* 18436 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18438)(arg0);
  } else {
    tmp3 = tmp(18439)(arg0);
  }
  return tmp3;
};
