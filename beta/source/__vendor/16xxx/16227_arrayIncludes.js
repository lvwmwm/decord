// Module ID: 16227
// Function ID: 16228
// Name: arrayIncludes
// Dependencies: [16228]

// Module 16227 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16228 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
