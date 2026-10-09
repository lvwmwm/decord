// Module ID: 18363
// Function ID: 18364
// Name: stringToArray
// Dependencies: [18362, 18364, 18365]

// Module 18363 (stringToArray)
import hasUnicode from "hasUnicode" /* 18362 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18364)(arg0);
  } else {
    tmp3 = tmp(18365)(arg0);
  }
  return tmp3;
};
