// Module ID: 5820
// Function ID: 5821
// Name: keysIn
// Dependencies: [518, 532, 5821]

// Module 5820 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5821)(arg0);
  }
  return tmp3;
};
