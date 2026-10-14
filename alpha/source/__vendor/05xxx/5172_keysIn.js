// Module ID: 5172
// Function ID: 5173
// Name: keysIn
// Dependencies: [518, 532, 5173]

// Module 5172 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5173)(arg0);
  }
  return tmp3;
};
