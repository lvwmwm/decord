// Module ID: 19205
// Function ID: 19206
// Name: stringToArray
// Dependencies: [19204, 19206, 19207]

// Module 19205 (stringToArray)
import hasUnicode from "hasUnicode" /* 19204 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19206)(arg0);
  } else {
    tmp3 = tmp(19207)(arg0);
  }
  return tmp3;
};
