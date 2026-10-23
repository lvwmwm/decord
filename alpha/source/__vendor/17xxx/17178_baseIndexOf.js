// Module ID: 17178
// Function ID: 17179
// Name: baseIndexOf
// Dependencies: [17179, 5727, 17180]

// Module 17178 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5727 */;
import strictIndexOf from "strictIndexOf" /* 17179 */;
import baseIsNaN from "baseIsNaN" /* 17180 */;


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
