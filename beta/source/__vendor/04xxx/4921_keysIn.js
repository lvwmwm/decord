// Module ID: 4921
// Function ID: 4922
// Name: keysIn
// Dependencies: [518, 532, 4922]

// Module 4921 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(4922)(arg0);
  }
  return tmp3;
};
