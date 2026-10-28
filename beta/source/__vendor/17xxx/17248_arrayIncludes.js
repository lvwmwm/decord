// Module ID: 17248
// Function ID: 17249
// Name: arrayIncludes
// Dependencies: [17249]

// Module 17248 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17249 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
