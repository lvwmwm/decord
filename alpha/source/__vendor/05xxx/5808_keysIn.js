// Module ID: 5808
// Function ID: 5809
// Name: keysIn
// Dependencies: [518, 532, 5809]

// Module 5808 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5809)(arg0);
  }
  return tmp3;
};
