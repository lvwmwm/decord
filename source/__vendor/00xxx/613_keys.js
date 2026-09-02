// Module ID: 613
// Function ID: 614
// Name: keys
// Dependencies: [600, 614, 626]

// Module 613 (keys)
import isArrayLike from "isArrayLike" /* 600 */;


export default function keys(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(614)(arg0);
  } else {
    tmp3 = tmp(626)(arg0);
  }
  return tmp3;
};
