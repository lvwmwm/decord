// Module ID: 18385
// Function ID: 18386
// Name: arrayIncludes
// Dependencies: [18386]

// Module 18385 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18386 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
