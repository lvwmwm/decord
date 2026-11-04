// Module ID: 20132
// Function ID: 20133
// Name: stringToArray
// Dependencies: [20131, 20133, 20134]

// Module 20132 (stringToArray)
import hasUnicode from "hasUnicode" /* 20131 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20133)(arg0);
  } else {
    tmp3 = tmp(20134)(arg0);
  }
  return tmp3;
};
