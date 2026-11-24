// Module ID: 17303
// Function ID: 17304
// Name: arrayIncludes
// Dependencies: [17304]

// Module 17303 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17304 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
