// Module ID: 17847
// Function ID: 17848
// Name: arrayIncludes
// Dependencies: [17848]

// Module 17847 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17848 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
