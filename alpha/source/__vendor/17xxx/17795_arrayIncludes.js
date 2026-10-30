// Module ID: 17795
// Function ID: 17796
// Name: arrayIncludes
// Dependencies: [17796]

// Module 17795 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 17796 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  const tmp = num && baseIndexOf(arg0, arg1, 0) > -1;
  return tmp;
};
