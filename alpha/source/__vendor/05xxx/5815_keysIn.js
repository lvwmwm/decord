// Module ID: 5815
// Function ID: 5816
// Name: keysIn
// Dependencies: [518, 532, 5816]

// Module 5815 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5816)(arg0);
  }
  return tmp3;
};
