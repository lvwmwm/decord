// Module ID: 5227
// Function ID: 5228
// Name: keysIn
// Dependencies: [518, 532, 5228]

// Module 5227 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5228)(arg0);
  }
  return tmp3;
};
