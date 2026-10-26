// Module ID: 17213
// Function ID: 17214
// Name: arrayIncludes
// Dependencies: [17214]

// Module 17213 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17214 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
