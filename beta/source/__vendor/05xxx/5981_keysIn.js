// Module ID: 5981
// Function ID: 5982
// Name: keysIn
// Dependencies: [518, 532, 5982]

// Module 5981 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5982)(arg0);
  }
  return tmp3;
};
