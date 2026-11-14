// Module ID: 20644
// Function ID: 20645
// Name: stringToArray
// Dependencies: [20643, 20645, 20646]

// Module 20644 (stringToArray)
import hasUnicode from "hasUnicode" /* 20643 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20645)(arg0);
  } else {
    tmp3 = tmp(20646)(arg0);
  }
  return tmp3;
};
