// Module ID: 5167
// Function ID: 5168
// Name: keysIn
// Dependencies: [518, 532, 5168]

// Module 5167 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5168)(arg0);
  }
  return tmp3;
};
