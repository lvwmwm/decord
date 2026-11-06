// Module ID: 18125
// Function ID: 18126
// Name: arrayIncludes
// Dependencies: [18126]

// Module 18125 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18126 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
