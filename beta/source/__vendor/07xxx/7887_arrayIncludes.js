// Module ID: 7887
// Function ID: 7888
// Name: arrayIncludes
// Dependencies: [7888]

// Module 7887 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7888 */;


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
