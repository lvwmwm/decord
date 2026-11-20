// Module ID: 17179
// Function ID: 17180
// Name: arrayIncludes
// Dependencies: [17180]

// Module 17179 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17180 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
