// Module ID: 17214
// Function ID: 17215
// Name: arrayIncludes
// Dependencies: [17215]

// Module 17214 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17215 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
