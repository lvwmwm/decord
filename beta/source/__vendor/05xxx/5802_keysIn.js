// Module ID: 5802
// Function ID: 5803
// Name: keysIn
// Dependencies: [518, 532, 5803]

// Module 5802 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5803)(arg0);
  }
  return tmp3;
};
