// Module ID: 19798
// Function ID: 19799
// Name: stringToArray
// Dependencies: [19797, 19799, 19800]

// Module 19798 (stringToArray)
import hasUnicode from "hasUnicode" /* 19797 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19799)(arg0);
  } else {
    tmp3 = tmp(19800)(arg0);
  }
  return tmp3;
};
