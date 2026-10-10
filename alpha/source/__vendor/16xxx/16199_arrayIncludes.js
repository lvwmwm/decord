// Module ID: 16199
// Function ID: 16200
// Name: arrayIncludes
// Dependencies: [16200]

// Module 16199 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16200 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
