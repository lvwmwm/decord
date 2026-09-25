// Module ID: 7023
// Function ID: 7024
// Name: arrayIncludes
// Dependencies: [7024]

// Module 7023 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7024 */;


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
