// Module ID: 19937
// Function ID: 19938
// Name: stringToArray
// Dependencies: [19936, 19938, 19939]

// Module 19937 (stringToArray)
import hasUnicode from "hasUnicode" /* 19936 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19938)(arg0);
  } else {
    tmp3 = tmp(19939)(arg0);
  }
  return tmp3;
};
