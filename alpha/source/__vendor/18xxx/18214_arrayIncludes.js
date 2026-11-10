// Module ID: 18214
// Function ID: 18215
// Name: arrayIncludes
// Dependencies: [18215]

// Module 18214 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18215 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
