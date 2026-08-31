// Module ID: 4795
// Function ID: 4796
// Name: getEvalledConstructor
// Dependencies: [540, 4743]

// Module 4795 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import isPrimitive from "isPrimitive" /* 4743 */;

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
