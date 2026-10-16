// Module ID: 5230
// Function ID: 5231
// Name: keysIn
// Dependencies: [518, 532, 5231]

// Module 5230 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5231)(arg0);
  }
  return tmp3;
};
