// Module ID: 15721
// Function ID: 15722
// Name: arrayIncludes
// Dependencies: [15722]

// Module 15721 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 15722 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
