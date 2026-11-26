// Module ID: 17511
// Function ID: 17512
// Name: arrayIncludes
// Dependencies: [17512]

// Module 17511 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17512 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
