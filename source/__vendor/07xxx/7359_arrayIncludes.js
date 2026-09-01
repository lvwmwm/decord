// Module ID: 7359
// Function ID: 7360
// Name: arrayIncludes
// Dependencies: [7360]

// Module 7359 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7360 */;


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
