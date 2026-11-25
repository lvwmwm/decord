// Module ID: 17454
// Function ID: 17455
// Name: arrayIncludes
// Dependencies: [17455]

// Module 17454 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17455 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
