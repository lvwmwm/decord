// Module ID: 18201
// Function ID: 18202
// Name: stringToArray
// Dependencies: [18200, 18202, 18203]

// Module 18201 (stringToArray)
import hasUnicode from "hasUnicode" /* 18200 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18202)(arg0);
  } else {
    tmp3 = tmp(18203)(arg0);
  }
  return tmp3;
};
