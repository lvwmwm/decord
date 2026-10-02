// Module ID: 17501
// Function ID: 17502
// Name: stringToArray
// Dependencies: [17500, 17502, 17503]

// Module 17501 (stringToArray)
import hasUnicode from "hasUnicode" /* 17500 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(17502)(arg0);
  } else {
    tmp3 = tmp(17503)(arg0);
  }
  return tmp3;
};
