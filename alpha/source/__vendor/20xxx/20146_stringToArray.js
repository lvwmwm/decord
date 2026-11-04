// Module ID: 20146
// Function ID: 20147
// Name: stringToArray
// Dependencies: [20145, 20147, 20148]

// Module 20146 (stringToArray)
import hasUnicode from "hasUnicode" /* 20145 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20147)(arg0);
  } else {
    tmp3 = tmp(20148)(arg0);
  }
  return tmp3;
};
