// Module ID: 19967
// Function ID: 19968
// Name: stringToArray
// Dependencies: [19966, 19968, 19969]

// Module 19967 (stringToArray)
import hasUnicode from "hasUnicode" /* 19966 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19968)(arg0);
  } else {
    tmp3 = tmp(19969)(arg0);
  }
  return tmp3;
};
