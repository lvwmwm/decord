// Module ID: 20299
// Function ID: 20300
// Name: stringToArray
// Dependencies: [20298, 20300, 20301]

// Module 20299 (stringToArray)
import hasUnicode from "hasUnicode" /* 20298 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20300)(arg0);
  } else {
    tmp3 = tmp(20301)(arg0);
  }
  return tmp3;
};
