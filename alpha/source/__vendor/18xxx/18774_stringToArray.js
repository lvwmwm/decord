// Module ID: 18774
// Function ID: 18775
// Name: stringToArray
// Dependencies: [18773, 18775, 18776]

// Module 18774 (stringToArray)
import hasUnicode from "hasUnicode" /* 18773 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18775)(arg0);
  } else {
    tmp3 = tmp(18776)(arg0);
  }
  return tmp3;
};
