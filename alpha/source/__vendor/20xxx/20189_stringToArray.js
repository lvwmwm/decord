// Module ID: 20189
// Function ID: 20190
// Name: stringToArray
// Dependencies: [20188, 20190, 20191]

// Module 20189 (stringToArray)
import hasUnicode from "hasUnicode" /* 20188 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20190)(arg0);
  } else {
    tmp3 = tmp(20191)(arg0);
  }
  return tmp3;
};
