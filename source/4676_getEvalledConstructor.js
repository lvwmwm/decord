// Module ID: 4676
// Function ID: 4677
// Name: getEvalledConstructor
// Dependencies: [540, 4624]

// Module 4676 (getEvalledConstructor)
let closure_2 = require("getEvalledConstructor")("%Object.isExtensible%", true);

export default require("getEvalledConstructor")("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = require(4624) /* isPrimitive */(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = callback(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !require(4624) /* isPrimitive */(arg0);
});
