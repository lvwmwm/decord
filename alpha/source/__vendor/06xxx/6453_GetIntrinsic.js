// Module ID: 6453
// Function ID: 6454
// Name: GetIntrinsic
// Dependencies: [1307, 6401]

// Module 6453 (GetIntrinsic)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import isPrimitive from "isPrimitive" /* 6401 */;

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
