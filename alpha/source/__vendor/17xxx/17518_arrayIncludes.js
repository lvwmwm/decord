// Module ID: 17518
// Function ID: 17519
// Name: arrayIncludes
// Dependencies: [17519]

// Module 17518 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17519 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
