// Module ID: 16841
// Function ID: 16842
// Name: baseIndexOf
// Dependencies: [16842, 5189, 16843]

// Module 16841 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5189 */;
import strictIndexOf from "strictIndexOf" /* 16842 */;
import baseIsNaN from "baseIsNaN" /* 16843 */;


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
