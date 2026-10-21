// Module ID: 17042
// Function ID: 17043
// Name: arrayIncludes
// Dependencies: [17043]

// Module 17042 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17043 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
