// Module ID: 6124
// Function ID: 6125
// Name: keysIn
// Dependencies: [518, 532, 6125]

// Module 6124 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(6125)(arg0);
  }
  return tmp3;
};
