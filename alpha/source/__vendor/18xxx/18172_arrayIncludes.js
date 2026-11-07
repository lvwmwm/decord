// Module ID: 18172
// Function ID: 18173
// Name: arrayIncludes
// Dependencies: [18173]

// Module 18172 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18173 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
