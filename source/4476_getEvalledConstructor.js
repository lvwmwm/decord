// Module ID: 4476
// Function ID: 39064
// Name: getEvalledConstructor
// Dependencies: [517, 4424]

// Module 4476 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  let tmp = !require(4424) /* isPrimitive */(arg0);
  if (tmp) {
    tmp = callback(arg0);
  }
  return tmp;
}) : (function IsExtensible(arg0) {
  return !require(4424) /* isPrimitive */(arg0);
});
