// Module ID: 20489
// Function ID: 20490
// Name: stringToArray
// Dependencies: [20488, 20490, 20491]

// Module 20489 (stringToArray)
import hasUnicode from "hasUnicode" /* 20488 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20490)(arg0);
  } else {
    tmp3 = tmp(20491)(arg0);
  }
  return tmp3;
};
