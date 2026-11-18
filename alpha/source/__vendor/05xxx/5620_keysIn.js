// Module ID: 5620
// Function ID: 5621
// Name: keysIn
// Dependencies: [518, 532, 5621]

// Module 5620 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5621)(arg0);
  }
  return tmp3;
};
