// Module ID: 17343
// Function ID: 17344
// Name: arrayIncludes
// Dependencies: [17344]

// Module 17343 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17344 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
