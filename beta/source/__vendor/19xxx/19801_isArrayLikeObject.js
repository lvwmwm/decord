// Module ID: 19801
// Function ID: 19802
// Name: isArrayLikeObject
// Dependencies: [535, 518]

// Module 19801 (isArrayLikeObject)
import isArrayLike from "isArrayLike" /* 518 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function isArrayLikeObject(arg0) {
  const tmp3 = isObjectLike(arg0) && isArrayLike(arg0);
  return tmp3;
};
