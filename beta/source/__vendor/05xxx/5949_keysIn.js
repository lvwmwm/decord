// Module ID: 5949
// Function ID: 5950
// Name: keysIn
// Dependencies: [518, 532, 5950]

// Module 5949 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5950)(arg0);
  }
  return tmp3;
};
