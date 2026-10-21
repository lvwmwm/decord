// Module ID: 19030
// Function ID: 19031
// Name: stringToArray
// Dependencies: [19029, 19031, 19032]

// Module 19030 (stringToArray)
import hasUnicode from "hasUnicode" /* 19029 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19031)(arg0);
  } else {
    tmp3 = tmp(19032)(arg0);
  }
  return tmp3;
};
