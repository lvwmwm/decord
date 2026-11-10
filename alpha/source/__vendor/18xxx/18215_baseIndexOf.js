// Module ID: 18215
// Function ID: 18216
// Name: baseIndexOf
// Dependencies: [18216, 5910, 18217]

// Module 18215 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5910 */;
import strictIndexOf from "strictIndexOf" /* 18216 */;
import baseIsNaN from "baseIsNaN" /* 18217 */;


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
