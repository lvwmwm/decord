// Module ID: 19866
// Function ID: 19867
// Name: stringToArray
// Dependencies: [19865, 19867, 19868]

// Module 19866 (stringToArray)
import hasUnicode from "hasUnicode" /* 19865 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19867)(arg0);
  } else {
    tmp3 = tmp(19868)(arg0);
  }
  return tmp3;
};
