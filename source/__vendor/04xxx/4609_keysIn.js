// Module ID: 4609
// Function ID: 4610
// Name: keysIn
// Dependencies: [600, 614, 4610]

// Module 4609 (keysIn)
import isArrayLike from "isArrayLike" /* 600 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(614)(arg0, true);
  } else {
    tmp3 = tmp(4610)(arg0);
  }
  return tmp3;
};
