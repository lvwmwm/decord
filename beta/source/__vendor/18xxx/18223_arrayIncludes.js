// Module ID: 18223
// Function ID: 18224
// Name: arrayIncludes
// Dependencies: [18224]

// Module 18223 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18224 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
