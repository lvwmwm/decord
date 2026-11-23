// Module ID: 19924
// Function ID: 19925
// Name: stringToArray
// Dependencies: [19923, 19925, 19926]

// Module 19924 (stringToArray)
import hasUnicode from "hasUnicode" /* 19923 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19925)(arg0);
  } else {
    tmp3 = tmp(19926)(arg0);
  }
  return tmp3;
};
