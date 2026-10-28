// Module ID: 5806
// Function ID: 5807
// Name: keysIn
// Dependencies: [518, 532, 5807]

// Module 5806 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5807)(arg0);
  }
  return tmp3;
};
