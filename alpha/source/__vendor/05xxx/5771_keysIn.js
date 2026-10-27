// Module ID: 5771
// Function ID: 5772
// Name: keysIn
// Dependencies: [518, 532, 5772]

// Module 5771 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5772)(arg0);
  }
  return tmp3;
};
