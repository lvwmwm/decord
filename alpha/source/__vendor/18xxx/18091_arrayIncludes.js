// Module ID: 18091
// Function ID: 18092
// Name: arrayIncludes
// Dependencies: [18092]

// Module 18091 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18092 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
