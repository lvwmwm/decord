// Module ID: 5770
// Function ID: 5771
// Name: keysIn
// Dependencies: [518, 532, 5771]

// Module 5770 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5771)(arg0);
  }
  return tmp3;
};
