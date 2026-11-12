// Module ID: 18220
// Function ID: 18221
// Name: arrayIncludes
// Dependencies: [18221]

// Module 18220 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18221 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
