// Module ID: 17043
// Function ID: 17044
// Name: baseIndexOf
// Dependencies: [17044, 5711, 17045]

// Module 17043 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5711 */;
import strictIndexOf from "strictIndexOf" /* 17044 */;
import baseIsNaN from "baseIsNaN" /* 17045 */;


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
