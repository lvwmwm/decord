// Module ID: 18505
// Function ID: 18506
// Name: arrayIncludes
// Dependencies: [18506]

// Module 18505 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18506 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
