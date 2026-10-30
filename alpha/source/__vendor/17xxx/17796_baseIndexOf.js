// Module ID: 17796
// Function ID: 17797
// Name: baseIndexOf
// Dependencies: [17797, 5774, 17798]

// Module 17796 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5774 */;
import strictIndexOf from "strictIndexOf" /* 17797 */;
import baseIsNaN from "baseIsNaN" /* 17798 */;


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
