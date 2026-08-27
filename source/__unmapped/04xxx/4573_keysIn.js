// Module ID: 4573
// Function ID: 4574
// Name: keysIn
// Dependencies: [603, 617, 4574]

// Module 4573 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4574)(arg0);
  }
  return tmp3;
};
