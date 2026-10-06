// Module ID: 4996
// Function ID: 4997
// Name: baseIsMap
// Dependencies: [535, 645]

// Module 4996 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;

let tmp;
const _mod645 = tmp(645);

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod645(arg0);
  }
  return tmp3;
};
