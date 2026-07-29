// Module ID: 4499
// Function ID: 4500
// Name: getEvalledConstructor
// Dependencies: [540, 4447]

// Module 4499 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = require(4447) /* isPrimitive */(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !require(4447) /* isPrimitive */(arg0);
});
