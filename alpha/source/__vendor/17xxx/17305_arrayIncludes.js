// Module ID: 17305
// Function ID: 17306
// Name: arrayIncludes
// Dependencies: [17306]

// Module 17305 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17306 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
