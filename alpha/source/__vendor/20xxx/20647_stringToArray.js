// Module ID: 20647
// Function ID: 20648
// Name: stringToArray
// Dependencies: [20646, 20648, 20649]

// Module 20647 (stringToArray)
import hasUnicode from "hasUnicode" /* 20646 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20648)(arg0);
  } else {
    tmp3 = tmp(20649)(arg0);
  }
  return tmp3;
};
