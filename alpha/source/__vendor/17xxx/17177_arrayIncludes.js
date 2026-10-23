// Module ID: 17177
// Function ID: 17178
// Name: arrayIncludes
// Dependencies: [17178]

// Module 17177 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17178 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
