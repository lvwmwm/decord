// Module ID: 17255
// Function ID: 17256
// Name: arrayIncludes
// Dependencies: [17256]

// Module 17255 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17256 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
