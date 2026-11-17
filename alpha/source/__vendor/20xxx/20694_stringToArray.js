// Module ID: 20694
// Function ID: 20695
// Name: stringToArray
// Dependencies: [20693, 20695, 20696]

// Module 20694 (stringToArray)
import hasUnicode from "hasUnicode" /* 20693 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(20695)(arg0);
  } else {
    tmp3 = tmp(20696)(arg0);
  }
  return tmp3;
};
