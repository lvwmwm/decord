// Module ID: 16840
// Function ID: 16841
// Name: arrayIncludes
// Dependencies: [16841]

// Module 16840 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16841 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
