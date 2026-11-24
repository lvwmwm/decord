// Module ID: 19922
// Function ID: 19923
// Name: stringToArray
// Dependencies: [19921, 19923, 19924]

// Module 19922 (stringToArray)
import hasUnicode from "hasUnicode" /* 19921 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19923)(arg0);
  } else {
    tmp3 = tmp(19924)(arg0);
  }
  return tmp3;
};
