// Module ID: 5954
// Function ID: 5955
// Name: keysIn
// Dependencies: [518, 532, 5955]

// Module 5954 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5955)(arg0);
  }
  return tmp3;
};
