// Module ID: 18499
// Function ID: 18500
// Name: stringToArray
// Dependencies: [18498, 18500, 18501]

// Module 18499 (stringToArray)
import hasUnicode from "hasUnicode" /* 18498 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18500)(arg0);
  } else {
    tmp3 = tmp(18501)(arg0);
  }
  return tmp3;
};
