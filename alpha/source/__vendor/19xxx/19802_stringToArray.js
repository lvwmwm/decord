// Module ID: 19802
// Function ID: 19803
// Name: stringToArray
// Dependencies: [19801, 19803, 19804]

// Module 19802 (stringToArray)
import hasUnicode from "hasUnicode" /* 19801 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19803)(arg0);
  } else {
    tmp3 = tmp(19804)(arg0);
  }
  return tmp3;
};
