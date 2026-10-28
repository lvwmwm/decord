// Module ID: 19233
// Function ID: 19234
// Name: stringToArray
// Dependencies: [19232, 19234, 19235]

// Module 19233 (stringToArray)
import hasUnicode from "hasUnicode" /* 19232 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19234)(arg0);
  } else {
    tmp3 = tmp(19235)(arg0);
  }
  return tmp3;
};
