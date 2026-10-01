// Module ID: 15654
// Function ID: 15655
// Name: arrayIncludes
// Dependencies: [15655]

// Module 15654 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 15655 */;


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
