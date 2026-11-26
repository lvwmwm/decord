// Module ID: 20136
// Function ID: 20137
// Name: stringToArray
// Dependencies: [20135, 20137, 20138]

// Module 20136 (stringToArray)
import hasUnicode from "hasUnicode" /* 20135 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20137)(arg0);
  } else {
    tmp3 = tmp(20138)(arg0);
  }
  return tmp3;
};
