// Module ID: 7369
// Function ID: 7370
// Name: arrayIncludes
// Dependencies: [7370]

// Module 7369 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7370 */;


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
