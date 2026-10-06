// Module ID: 531
// Function ID: 532
// Dependencies: [518, 532, 544]

// Module 531
import isArrayLike from "isArrayLike" /* 518 */;


export default function keys(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = tmp(532)(arg0);
  } else {
    tmp3 = tmp(544)(arg0);
  }
  return tmp3;
};
