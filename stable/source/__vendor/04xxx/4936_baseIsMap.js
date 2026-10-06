// Module ID: 4936
// Function ID: 4937
// Name: baseIsMap
// Dependencies: [535, 646]

// Module 4936 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod646 = tmp(646);

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod646(arg0);
  }
  return tmp3;
};
