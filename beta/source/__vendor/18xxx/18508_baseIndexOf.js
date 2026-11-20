// Module ID: 18508
// Function ID: 18509
// Name: baseIndexOf
// Dependencies: [18509, 6076, 18510]

// Module 18508 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6076 */;
import strictIndexOf from "strictIndexOf" /* 18509 */;
import baseIsNaN from "baseIsNaN" /* 18510 */;


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
