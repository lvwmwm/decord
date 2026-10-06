// Module ID: 7032
// Function ID: 7033
// Name: arrayIncludes
// Dependencies: [7033]

// Module 7032 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7033 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
