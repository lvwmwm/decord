// Module ID: 17914
// Function ID: 17915
// Name: stringToArray
// Dependencies: [17913, 17915, 17916]

// Module 17914 (stringToArray)
import hasUnicode from "hasUnicode" /* 17913 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(17915)(arg0);
  } else {
    tmp3 = tmp(17916)(arg0);
  }
  return tmp3;
};
