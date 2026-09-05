// Module ID: 4645
// Function ID: 4646
// Name: keysIn
// Dependencies: [518, 532, 4646]

// Module 4645 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(4646)(arg0);
  }
  return tmp3;
};
