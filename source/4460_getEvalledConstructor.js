// Module ID: 4460
// Function ID: 4461
// Name: getEvalledConstructor
// Dependencies: [540, 4408]

// Module 4460 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import isPrimitive from "isPrimitive" /* 4408 */;

let closure_2 = getEvalledConstructor("%Object.isExtensible%", true);

export default getEvalledConstructor("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = isPrimitive(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !isPrimitive(arg0);
});
