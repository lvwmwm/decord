// Module ID: 4577
// Function ID: 4578
// Name: keysIn
// Dependencies: [603, 617, 4578]

// Module 4577 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4578)(arg0);
  }
  return tmp3;
};
