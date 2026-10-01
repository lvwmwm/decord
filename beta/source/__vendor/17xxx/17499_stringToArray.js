// Module ID: 17499
// Function ID: 17500
// Name: stringToArray
// Dependencies: [17498, 17500, 17501]

// Module 17499 (stringToArray)
import hasUnicode from "hasUnicode" /* 17498 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(17500)(arg0);
  } else {
    tmp3 = tmp(17501)(arg0);
  }
  return tmp3;
};
