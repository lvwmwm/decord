// Module ID: 17313
// Function ID: 17314
// Name: arrayIncludes
// Dependencies: [17314]

// Module 17313 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17314 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
