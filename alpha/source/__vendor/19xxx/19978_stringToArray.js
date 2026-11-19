// Module ID: 19978
// Function ID: 19979
// Name: stringToArray
// Dependencies: [19977, 19979, 19980]

// Module 19978 (stringToArray)
import hasUnicode from "hasUnicode" /* 19977 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19979)(arg0);
  } else {
    tmp3 = tmp(19980)(arg0);
  }
  return tmp3;
};
