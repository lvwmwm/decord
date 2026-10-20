// Module ID: 5731
// Function ID: 5732
// Name: keysIn
// Dependencies: [518, 532, 5732]

// Module 5731 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5732)(arg0);
  }
  return tmp3;
};
