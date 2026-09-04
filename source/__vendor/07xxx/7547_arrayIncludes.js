// Module ID: 7547
// Function ID: 7548
// Name: arrayIncludes
// Dependencies: [7548]

// Module 7547 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7548 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = baseIndexOf(arg0, arg1, 0) > -1;
  }
  return tmp;
};
