// Module ID: 19164
// Function ID: 19165
// Name: stringToArray
// Dependencies: [19163, 19165, 19166]

// Module 19164 (stringToArray)
import hasUnicode from "hasUnicode" /* 19163 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(19165)(arg0);
  } else {
    tmp3 = tmp(19166)(arg0);
  }
  return tmp3;
};
