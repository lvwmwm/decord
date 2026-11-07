// Module ID: 18173
// Function ID: 18174
// Name: baseIndexOf
// Dependencies: [18174, 5908, 18175]

// Module 18173 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5908 */;
import strictIndexOf from "strictIndexOf" /* 18174 */;
import baseIsNaN from "baseIsNaN" /* 18175 */;


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
