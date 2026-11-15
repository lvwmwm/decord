// Module ID: 18221
// Function ID: 18222
// Name: arrayIncludes
// Dependencies: [18222]

// Module 18221 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18222 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
