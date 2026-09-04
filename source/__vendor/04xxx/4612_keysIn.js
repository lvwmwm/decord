// Module ID: 4612
// Function ID: 4613
// Name: keysIn
// Dependencies: [600, 614, 4613]

// Module 4612 (keysIn)
import isArrayLike from "isArrayLike" /* 600 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(614)(arg0, true);
  } else {
    tmp3 = tmp(4613)(arg0);
  }
  return tmp3;
};
