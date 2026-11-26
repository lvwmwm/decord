// Module ID: 17317
// Function ID: 17318
// Name: arrayIncludes
// Dependencies: [17318]

// Module 17317 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17318 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
