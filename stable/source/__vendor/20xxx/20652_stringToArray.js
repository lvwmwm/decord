// Module ID: 20652
// Function ID: 20653
// Name: stringToArray
// Dependencies: [20651, 20653, 20654]

// Module 20652 (stringToArray)
import hasUnicode from "hasUnicode" /* 20651 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20653)(arg0);
  } else {
    tmp3 = tmp(20654)(arg0);
  }
  return tmp3;
};
