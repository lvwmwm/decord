// Module ID: 4835
// Function ID: 4836
// Name: getEvalledConstructor
// Dependencies: [537, 4783]

// Module 4835 (getEvalledConstructor)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import isPrimitive from "isPrimitive" /* 4783 */;

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
