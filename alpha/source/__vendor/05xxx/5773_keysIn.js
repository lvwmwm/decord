// Module ID: 5773
// Function ID: 5774
// Name: keysIn
// Dependencies: [518, 532, 5774]

// Module 5773 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5774)(arg0);
  }
  return tmp3;
};
