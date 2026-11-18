// Module ID: 20650
// Function ID: 20651
// Name: stringToArray
// Dependencies: [20649, 20651, 20652]

// Module 20650 (stringToArray)
import hasUnicode from "hasUnicode" /* 20649 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20651)(arg0);
  } else {
    tmp3 = tmp(20652)(arg0);
  }
  return tmp3;
};
