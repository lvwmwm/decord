// Module ID: 17485
// Function ID: 17486
// Name: arrayIncludes
// Dependencies: [17486]

// Module 17485 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17486 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
