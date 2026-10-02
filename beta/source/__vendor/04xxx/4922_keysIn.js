// Module ID: 4922
// Function ID: 4923
// Name: keysIn
// Dependencies: [518, 532, 4923]

// Module 4922 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(4923)(arg0);
  }
  return tmp3;
};
