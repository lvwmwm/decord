// Module ID: 5768
// Function ID: 5769
// Name: keysIn
// Dependencies: [518, 532, 5769]

// Module 5768 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5769)(arg0);
  }
  return tmp3;
};
