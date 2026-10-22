// Module ID: 5756
// Function ID: 5757
// Name: keysIn
// Dependencies: [518, 532, 5757]

// Module 5756 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5757)(arg0);
  }
  return tmp3;
};
