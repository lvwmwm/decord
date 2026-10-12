// Module ID: 16222
// Function ID: 16223
// Name: arrayIncludes
// Dependencies: [16223]

// Module 16222 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16223 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
