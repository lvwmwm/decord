// Module ID: 18953
// Function ID: 18954
// Name: stringToArray
// Dependencies: [18952, 18954, 18955]

// Module 18953 (stringToArray)
import hasUnicode from "hasUnicode" /* 18952 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18954)(arg0);
  } else {
    tmp3 = tmp(18955)(arg0);
  }
  return tmp3;
};
