// Module ID: 16966
// Function ID: 16967
// Name: arrayIncludes
// Dependencies: [16967]

// Module 16966 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16967 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
