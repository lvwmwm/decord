// Module ID: 5178
// Function ID: 5179
// Name: baseIsSet
// Dependencies: [535, 645]

// Module 5178 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod645 = tmp(645);

export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod645(arg0);
  }
  return tmp3;
};
