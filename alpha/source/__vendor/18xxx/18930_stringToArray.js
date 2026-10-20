// Module ID: 18930
// Function ID: 18931
// Name: stringToArray
// Dependencies: [18929, 18931, 18932]

// Module 18930 (stringToArray)
import hasUnicode from "hasUnicode" /* 18929 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18931)(arg0);
  } else {
    tmp3 = tmp(18932)(arg0);
  }
  return tmp3;
};
