// Module ID: 19191
// Function ID: 19192
// Name: stringToArray
// Dependencies: [19190, 19192, 19193]

// Module 19191 (stringToArray)
import hasUnicode from "hasUnicode" /* 19190 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19192)(arg0);
  } else {
    tmp3 = tmp(19193)(arg0);
  }
  return tmp3;
};
