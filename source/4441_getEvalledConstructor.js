// Module ID: 4441
// Function ID: 38937
// Name: getEvalledConstructor
// Dependencies: [517, 4389]

// Module 4441 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  let tmp = !require(4389) /* isPrimitive */(arg0);
  if (tmp) {
    tmp = callback(arg0);
  }
  return tmp;
}) : (function IsExtensible(arg0) {
  return !require(4389) /* isPrimitive */(arg0);
});
