// Module ID: 4503
// Function ID: 4504
// Name: getEvalledConstructor
// Dependencies: [540, 4451]

// Module 4503 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = require(4451) /* isPrimitive */(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !require(4451) /* isPrimitive */(arg0);
});
