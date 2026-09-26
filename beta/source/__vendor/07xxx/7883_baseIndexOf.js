// Module ID: 7883
// Function ID: 7884
// Name: baseIndexOf
// Dependencies: [7884, 4824, 7885]

// Module 7883 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4824 */;
import strictIndexOf from "strictIndexOf" /* 7884 */;
import baseIsNaN from "baseIsNaN" /* 7885 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
