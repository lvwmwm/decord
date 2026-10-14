// Module ID: 16568
// Function ID: 16569
// Name: arrayIncludes
// Dependencies: [16569]

// Module 16568 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16569 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
