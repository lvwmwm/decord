// Module ID: 5832
// Function ID: 5833
// Name: baseIsSet
// Dependencies: [535, 633]

// Module 5832 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod633 = tmp(633);

export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod633(arg0);
  }
  return tmp3;
};
