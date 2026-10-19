// Module ID: 18895
// Function ID: 18896
// Name: stringToArray
// Dependencies: [18894, 18896, 18897]

// Module 18895 (stringToArray)
import hasUnicode from "hasUnicode" /* 18894 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18896)(arg0);
  } else {
    tmp3 = tmp(18897)(arg0);
  }
  return tmp3;
};
