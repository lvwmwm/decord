// Module ID: 17209
// Function ID: 17210
// Name: arrayIncludes
// Dependencies: [17210]

// Module 17209 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17210 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
