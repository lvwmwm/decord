// Module ID: 18103
// Function ID: 18104
// Name: arrayIncludes
// Dependencies: [18104]

// Module 18103 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18104 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
