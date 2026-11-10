// Module ID: 5951
// Function ID: 5952
// Name: keysIn
// Dependencies: [518, 532, 5952]

// Module 5951 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5952)(arg0);
  }
  return tmp3;
};
