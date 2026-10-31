// Module ID: 17839
// Function ID: 17840
// Name: arrayIncludes
// Dependencies: [17840]

// Module 17839 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17840 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
