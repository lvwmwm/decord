// Module ID: 17995
// Function ID: 17996
// Name: arrayIncludes
// Dependencies: [17996]

// Module 17995 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17996 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
