// Module ID: 15717
// Function ID: 15718
// Name: arrayIncludes
// Dependencies: [15718]

// Module 15717 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 15718 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
