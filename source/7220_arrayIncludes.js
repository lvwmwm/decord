// Module ID: 7220
// Function ID: 7221
// Name: arrayIncludes
// Dependencies: [7221]

// Module 7220 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7221 */;


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
