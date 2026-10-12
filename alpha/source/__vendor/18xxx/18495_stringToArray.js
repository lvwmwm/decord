// Module ID: 18495
// Function ID: 18496
// Name: stringToArray
// Dependencies: [18494, 18496, 18497]

// Module 18495 (stringToArray)
import hasUnicode from "hasUnicode" /* 18494 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18496)(arg0);
  } else {
    tmp3 = tmp(18497)(arg0);
  }
  return tmp3;
};
