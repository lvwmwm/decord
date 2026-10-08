// Module ID: 5166
// Function ID: 5167
// Name: keysIn
// Dependencies: [518, 532, 5167]

// Module 5166 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5167)(arg0);
  }
  return tmp3;
};
