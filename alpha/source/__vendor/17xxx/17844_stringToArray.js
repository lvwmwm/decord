// Module ID: 17844
// Function ID: 17845
// Name: stringToArray
// Dependencies: [17843, 17845, 17846]

// Module 17844 (stringToArray)
import hasUnicode from "hasUnicode" /* 17843 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(17845)(arg0);
  } else {
    tmp3 = tmp(17846)(arg0);
  }
  return tmp3;
};
