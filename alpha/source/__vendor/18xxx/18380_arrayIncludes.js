// Module ID: 18380
// Function ID: 18381
// Name: arrayIncludes
// Dependencies: [18381]

// Module 18380 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18381 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
