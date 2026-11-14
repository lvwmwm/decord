// Module ID: 6127
// Function ID: 6128
// Name: keysIn
// Dependencies: [518, 532, 6128]

// Module 6127 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(6128)(arg0);
  }
  return tmp3;
};
