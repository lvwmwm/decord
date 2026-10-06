// Module ID: 534
// Function ID: 535
// Name: baseIsArguments
// Dependencies: [535, 522]

// Module 534 (baseIsArguments)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const baseGetTag = tmp(522);

export default function baseIsArguments(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == baseGetTag(arg0);
  }
  return tmp3;
};
