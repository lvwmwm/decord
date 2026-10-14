// Module ID: 18535
// Function ID: 18536
// Name: stringToArray
// Dependencies: [18534, 18536, 18537]

// Module 18535 (stringToArray)
import hasUnicode from "hasUnicode" /* 18534 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18536)(arg0);
  } else {
    tmp3 = tmp(18537)(arg0);
  }
  return tmp3;
};
