// Module ID: 16918
// Function ID: 16919
// Name: arrayIncludes
// Dependencies: [16919]

// Module 16918 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16919 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
