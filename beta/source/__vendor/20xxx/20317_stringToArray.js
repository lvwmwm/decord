// Module ID: 20317
// Function ID: 20318
// Name: stringToArray
// Dependencies: [20316, 20318, 20319]

// Module 20317 (stringToArray)
import hasUnicode from "hasUnicode" /* 20316 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20318)(arg0);
  } else {
    tmp3 = tmp(20319)(arg0);
  }
  return tmp3;
};
