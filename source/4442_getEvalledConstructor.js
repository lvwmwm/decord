// Module ID: 4442
// Function ID: 38950
// Name: getEvalledConstructor
// Dependencies: [517, 4390]

// Module 4442 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  let tmp = !require(4390) /* isPrimitive */(arg0);
  if (tmp) {
    tmp = callback(arg0);
  }
  return tmp;
}) : (function IsExtensible(arg0) {
  return !require(4390) /* isPrimitive */(arg0);
});
