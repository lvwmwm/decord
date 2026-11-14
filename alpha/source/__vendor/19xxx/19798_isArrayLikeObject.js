// Module ID: 19798
// Function ID: 19799
// Name: isArrayLikeObject
// Dependencies: [535, 518]

// Module 19798 (isArrayLikeObject)
import isArrayLike from "isArrayLike" /* 518 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function isArrayLikeObject(arg0) {
  const tmp3 = isObjectLike(arg0) && isArrayLike(arg0);
  return tmp3;
};
