// Module ID: 15757
// Function ID: 15758
// Name: arrayIncludes
// Dependencies: [15758]

// Module 15757 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 15758 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
