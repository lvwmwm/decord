// Module ID: 7614
// Function ID: 7615
// Name: arrayIncludes
// Dependencies: [7615]

// Module 7614 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7615 */;


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
