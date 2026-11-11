// Module ID: 20494
// Function ID: 20495
// Name: stringToArray
// Dependencies: [20493, 20495, 20496]

// Module 20494 (stringToArray)
import hasUnicode from "hasUnicode" /* 20493 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20495)(arg0);
  } else {
    tmp3 = tmp(20496)(arg0);
  }
  return tmp3;
};
