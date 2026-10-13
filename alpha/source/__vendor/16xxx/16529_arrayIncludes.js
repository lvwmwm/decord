// Module ID: 16529
// Function ID: 16530
// Name: arrayIncludes
// Dependencies: [16530]

// Module 16529 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16530 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
