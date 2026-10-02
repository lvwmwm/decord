// Module ID: 4934
// Function ID: 4935
// Name: baseIsSet
// Dependencies: [535, 646]

// Module 4934 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod646 = tmp(646);

export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod646(arg0);
  }
  return tmp3;
};
