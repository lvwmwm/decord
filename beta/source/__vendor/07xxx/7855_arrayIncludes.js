// Module ID: 7855
// Function ID: 7856
// Name: arrayIncludes
// Dependencies: [7856]

// Module 7855 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7856 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = baseIndexOf(arg0, arg1, 0) > -1;
  }
  return tmp;
};
