// Module ID: 20072
// Function ID: 20073
// Name: stringToArray
// Dependencies: [20071, 20073, 20074]

// Module 20072 (stringToArray)
import hasUnicode from "hasUnicode" /* 20071 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20073)(arg0);
  } else {
    tmp3 = tmp(20074)(arg0);
  }
  return tmp3;
};
