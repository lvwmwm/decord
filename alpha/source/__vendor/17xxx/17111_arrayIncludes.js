// Module ID: 17111
// Function ID: 17112
// Name: arrayIncludes
// Dependencies: [17112]

// Module 17111 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17112 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
