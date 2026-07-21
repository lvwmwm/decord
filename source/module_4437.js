// Module ID: 4437
// Function ID: 38897
// Dependencies: []

// Module 4437
let closure_2 = require(dependencyMap[0])("%Object.isExtensible%", true);

export default require(dependencyMap[0])("%Object.preventExtensions%", true) ? function IsExtensible(arg0) {
  let tmp = !require(dependencyMap[1])(arg0);
  if (tmp) {
    tmp = callback(arg0);
  }
  return tmp;
} : function IsExtensible(arg0) {
  return !require(dependencyMap[1])(arg0);
};
