// Module ID: 19925
// Function ID: 19926
// Name: stringToArray
// Dependencies: [19924, 19926, 19927]

// Module 19925 (stringToArray)
import hasUnicode from "hasUnicode" /* 19924 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19926)(arg0);
  } else {
    tmp3 = tmp(19927)(arg0);
  }
  return tmp3;
};
