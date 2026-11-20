// Module ID: 17180
// Function ID: 17181
// Name: baseIndexOf
// Dependencies: [17181, 5550, 17182]

// Module 17180 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5550 */;
import strictIndexOf from "strictIndexOf" /* 17181 */;
import baseIsNaN from "baseIsNaN" /* 17182 */;


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
