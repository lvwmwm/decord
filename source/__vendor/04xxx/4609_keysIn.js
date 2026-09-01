// Module ID: 4609
// Function ID: 4610
// Name: keysIn
// Dependencies: [603, 617, 4610]

// Module 4609 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4610)(arg0);
  }
  return tmp3;
};
