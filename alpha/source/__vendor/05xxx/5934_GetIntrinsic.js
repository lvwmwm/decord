// Module ID: 5934
// Function ID: 5935
// Name: GetIntrinsic
// Dependencies: [1307, 5882]

// Module 5934 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import isPrimitive from "isPrimitive" /* 5882 */;

const tmp = GetIntrinsic("%Object.preventExtensions%", true);
let closure_2 = GetIntrinsic("%Object.isExtensible%", true);

export default tmp ? (function IsExtensible(arg0) {
  let tmp2 = !isPrimitive(arg0);
  isPrimitive(arg0);
  if (tmp2) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !isPrimitive(arg0);
});
