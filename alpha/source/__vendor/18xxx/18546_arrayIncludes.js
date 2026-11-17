// Module ID: 18546
// Function ID: 18547
// Name: arrayIncludes
// Dependencies: [18547]

// Module 18546 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18547 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
