// Module ID: 6521
// Function ID: 6522
// Name: GetIntrinsic
// Dependencies: [1293, 6469]

// Module 6521 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import isPrimitive from "isPrimitive" /* 6469 */;

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
