// Module ID: 19120
// Function ID: 19121
// Name: stringToArray
// Dependencies: [19119, 19121, 19122]

// Module 19120 (stringToArray)
import hasUnicode from "hasUnicode" /* 19119 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19121)(arg0);
  } else {
    tmp3 = tmp(19122)(arg0);
  }
  return tmp3;
};
