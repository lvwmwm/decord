// Module ID: 18506
// Function ID: 18507
// Name: baseIndexOf
// Dependencies: [18507, 6076, 18508]

// Module 18506 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6076 */;
import strictIndexOf from "strictIndexOf" /* 18507 */;
import baseIsNaN from "baseIsNaN" /* 18508 */;


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
