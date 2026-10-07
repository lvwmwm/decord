// Module ID: 17868
// Function ID: 17869
// Name: stringToArray
// Dependencies: [17867, 17869, 17870]

// Module 17868 (stringToArray)
import hasUnicode from "hasUnicode" /* 17867 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(17869)(arg0);
  } else {
    tmp3 = tmp(17870)(arg0);
  }
  return tmp3;
};
