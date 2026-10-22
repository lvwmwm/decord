// Module ID: 17133
// Function ID: 17134
// Name: arrayIncludes
// Dependencies: [17134]

// Module 17133 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17134 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
