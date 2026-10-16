// Module ID: 16854
// Function ID: 16855
// Name: arrayIncludes
// Dependencies: [16855]

// Module 16854 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 16855 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
