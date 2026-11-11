// Module ID: 6064
// Function ID: 6065
// Name: keysIn
// Dependencies: [518, 532, 6065]

// Module 6064 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(6065)(arg0);
  }
  return tmp3;
};
