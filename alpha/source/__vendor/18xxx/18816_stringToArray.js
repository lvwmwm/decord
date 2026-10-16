// Module ID: 18816
// Function ID: 18817
// Name: stringToArray
// Dependencies: [18815, 18817, 18818]

// Module 18816 (stringToArray)
import hasUnicode from "hasUnicode" /* 18815 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = tmp(18817)(arg0);
  } else {
    tmp3 = tmp(18818)(arg0);
  }
  return tmp3;
};
