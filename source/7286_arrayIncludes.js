// Module ID: 7286
// Function ID: 7287
// Name: arrayIncludes
// Dependencies: [7287]

// Module 7286 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7287 */;


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
