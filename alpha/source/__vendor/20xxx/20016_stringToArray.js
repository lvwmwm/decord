// Module ID: 20016
// Function ID: 20017
// Name: stringToArray
// Dependencies: [20015, 20017, 20018]

// Module 20016 (stringToArray)
import hasUnicode from "hasUnicode" /* 20015 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20017)(arg0);
  } else {
    tmp3 = tmp(20018)(arg0);
  }
  return tmp3;
};
