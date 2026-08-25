// Module ID: 4509
// Function ID: 4510
// Name: keysIn
// Dependencies: [603, 617, 4510]

// Module 4509 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4510)(arg0);
  }
  return tmp3;
};
