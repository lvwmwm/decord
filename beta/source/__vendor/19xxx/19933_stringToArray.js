// Module ID: 19933
// Function ID: 19934
// Name: stringToArray
// Dependencies: [19932, 19934, 19935]

// Module 19933 (stringToArray)
import hasUnicode from "hasUnicode" /* 19932 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19934)(arg0);
  } else {
    tmp3 = tmp(19935)(arg0);
  }
  return tmp3;
};
