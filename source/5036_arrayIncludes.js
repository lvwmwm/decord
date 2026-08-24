// Module ID: 5036
// Function ID: 5037
// Name: arrayIncludes
// Dependencies: [5037]

// Module 5036 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 5037 */;


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
