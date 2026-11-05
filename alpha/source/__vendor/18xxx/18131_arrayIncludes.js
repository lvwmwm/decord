// Module ID: 18131
// Function ID: 18132
// Name: arrayIncludes
// Dependencies: [18132]

// Module 18131 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18132 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
