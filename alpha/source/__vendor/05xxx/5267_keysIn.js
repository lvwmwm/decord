// Module ID: 5267
// Function ID: 5268
// Name: keysIn
// Dependencies: [518, 532, 5268]

// Module 5267 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5268)(arg0);
  }
  return tmp3;
};
