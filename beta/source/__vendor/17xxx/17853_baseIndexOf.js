// Module ID: 17853
// Function ID: 17854
// Name: baseIndexOf
// Dependencies: [17854, 5779, 17855]

// Module 17853 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5779 */;
import strictIndexOf from "strictIndexOf" /* 17854 */;
import baseIsNaN from "baseIsNaN" /* 17855 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  let tmp3Result;
  if (arg1 == arg1) {
    tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    const tmp3 = baseFindIndex;
    tmp3Result = tmp3(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
