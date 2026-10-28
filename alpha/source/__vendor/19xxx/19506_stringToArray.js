// Module ID: 19506
// Function ID: 19507
// Name: stringToArray
// Dependencies: [19505, 19507, 19508]

// Module 19506 (stringToArray)
import hasUnicode from "hasUnicode" /* 19505 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19507)(arg0);
  } else {
    tmp3 = tmp(19508)(arg0);
  }
  return tmp3;
};
