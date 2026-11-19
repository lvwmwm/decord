// Module ID: 17353
// Function ID: 17354
// Name: baseIndexOf
// Dependencies: [17354, 5548, 17355]

// Module 17353 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5548 */;
import strictIndexOf from "strictIndexOf" /* 17354 */;
import baseIsNaN from "baseIsNaN" /* 17355 */;


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
