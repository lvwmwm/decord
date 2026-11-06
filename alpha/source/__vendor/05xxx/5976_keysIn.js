// Module ID: 5976
// Function ID: 5977
// Name: keysIn
// Dependencies: [518, 532, 5977]

// Module 5976 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0, true);
  } else {
    tmp3 = tmp(5977)(arg0);
  }
  return tmp3;
};
