// Module ID: 19861
// Function ID: 19862
// Name: stringToArray
// Dependencies: [19860, 19862, 19863]

// Module 19861 (stringToArray)
import hasUnicode from "hasUnicode" /* 19860 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19862)(arg0);
  } else {
    tmp3 = tmp(19863)(arg0);
  }
  return tmp3;
};
