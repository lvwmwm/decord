// Module ID: 5716
// Function ID: 5717
// Name: GetIntrinsic
// Dependencies: [1305, 5664]

// Module 5716 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import isPrimitive from "isPrimitive" /* 5664 */;

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
