// Module ID: 19020
// Function ID: 19021
// Name: isArrayLikeObject
// Dependencies: [535, 518]

// Module 19020 (isArrayLikeObject)
import isArrayLike from "isArrayLike" /* 518 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function isArrayLikeObject(arg0) {
  const tmp3 = isObjectLike(arg0) && isArrayLike(arg0);
  return tmp3;
};
