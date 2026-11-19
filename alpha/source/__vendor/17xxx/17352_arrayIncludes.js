// Module ID: 17352
// Function ID: 17353
// Name: arrayIncludes
// Dependencies: [17353]

// Module 17352 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17353 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
