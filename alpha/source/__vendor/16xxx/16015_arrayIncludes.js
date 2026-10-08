// Module ID: 16015
// Function ID: 16016
// Name: arrayIncludes
// Dependencies: [16016]

// Module 16015 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16016 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
