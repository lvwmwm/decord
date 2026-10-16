// Module ID: 5229
// Function ID: 5230
// Name: keysIn
// Dependencies: [518, 532, 5230]

// Module 5229 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5230)(arg0);
  }
  return tmp3;
};
