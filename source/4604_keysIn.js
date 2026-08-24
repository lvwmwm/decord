// Module ID: 4604
// Function ID: 4605
// Name: keysIn
// Dependencies: [603, 617, 4605]

// Module 4604 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4605)(arg0);
  }
  return tmp3;
};
