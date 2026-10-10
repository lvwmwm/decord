// Module ID: 5168
// Function ID: 5169
// Name: keysIn
// Dependencies: [518, 532, 5169]

// Module 5168 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5169)(arg0);
  }
  return tmp3;
};
