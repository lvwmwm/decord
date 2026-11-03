// Module ID: 17996
// Function ID: 17997
// Name: baseIndexOf
// Dependencies: [17997, 5899, 17998]

// Module 17996 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5899 */;
import strictIndexOf from "strictIndexOf" /* 17997 */;
import baseIsNaN from "baseIsNaN" /* 17998 */;


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
