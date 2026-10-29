// Module ID: 19739
// Function ID: 19740
// Name: stringToArray
// Dependencies: [19738, 19740, 19741]

// Module 19739 (stringToArray)
import hasUnicode from "hasUnicode" /* 19738 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19740)(arg0);
  } else {
    tmp3 = tmp(19741)(arg0);
  }
  return tmp3;
};
