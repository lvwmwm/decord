// Module ID: 16131
// Function ID: 16132
// Name: arrayIncludes
// Dependencies: [16132]

// Module 16131 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16132 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
