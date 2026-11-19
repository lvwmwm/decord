// Module ID: 5589
// Function ID: 5590
// Name: keysIn
// Dependencies: [518, 532, 5590]

// Module 5589 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5590)(arg0);
  }
  return tmp3;
};
