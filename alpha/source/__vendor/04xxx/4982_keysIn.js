// Module ID: 4982
// Function ID: 4983
// Name: keysIn
// Dependencies: [518, 532, 4983]

// Module 4982 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(4983)(arg0);
  }
  return tmp3;
};
