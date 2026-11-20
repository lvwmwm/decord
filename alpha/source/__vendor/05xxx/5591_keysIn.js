// Module ID: 5591
// Function ID: 5592
// Name: keysIn
// Dependencies: [518, 532, 5592]

// Module 5591 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5592)(arg0);
  }
  return tmp3;
};
