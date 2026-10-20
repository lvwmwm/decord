// Module ID: 16947
// Function ID: 16948
// Name: arrayIncludes
// Dependencies: [16948]

// Module 16947 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16948 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
