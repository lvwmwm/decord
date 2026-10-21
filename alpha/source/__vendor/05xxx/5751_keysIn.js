// Module ID: 5751
// Function ID: 5752
// Name: keysIn
// Dependencies: [518, 532, 5752]

// Module 5751 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5752)(arg0);
  }
  return tmp3;
};
