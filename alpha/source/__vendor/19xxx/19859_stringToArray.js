// Module ID: 19859
// Function ID: 19860
// Name: stringToArray
// Dependencies: [19858, 19860, 19861]

// Module 19859 (stringToArray)
import hasUnicode from "hasUnicode" /* 19858 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19860)(arg0);
  } else {
    tmp3 = tmp(19861)(arg0);
  }
  return tmp3;
};
