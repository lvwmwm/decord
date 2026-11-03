// Module ID: 5940
// Function ID: 5941
// Name: keysIn
// Dependencies: [518, 532, 5941]

// Module 5940 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5941)(arg0);
  }
  return tmp3;
};
