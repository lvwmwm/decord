// Module ID: 4574
// Function ID: 4575
// Name: keysIn
// Dependencies: [603, 617, 4575]

// Module 4574 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4575)(arg0);
  }
  return tmp3;
};
